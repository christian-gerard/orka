import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { object, string, array, number } from "yup";
import { useFormik, Field, Form, Formik } from "formik";
import EditIcon from '@mui/icons-material/Edit';
import ProductionNeed from './ProductionNeed'
import BudgetItem from './BudgetItem'
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Project({id, name, client, description, status, deadline}) {
    
    const { user, updateUser, clients, tasks } = useContext(UserContext)
    const route = useParams();
    const routeType = useLocation()
    const [currentProject, setCurrentProject] = useState(null)
    const [clientName, setClientName] = useState('')
    const [prodNeeds, setProdNeeds] = useState([])
    const [budgItems, setBudgItems] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [newProdNeed, setNewProdNeed] = useState(false)
    const [newBudgItem, setNewBudgItem] = useState(false)
    const nav = useNavigate()

    const clientOptions = user.user.account_details.clients.map(client => {
        return <option value={client.id}>{client.name}</option>
    })

    const projectSchema = object({
        name: string()
        .required(),
        type: string()
        .required(),
        status: string()
        .required(),
        deadline: string()
        .required(),
        client: number()
        .required()
      });

      const prodNeedSchema = object({
        description: string()
        .required(),
        type: string()
        .required(),
        note: string()
        .required(),
        deadline: string()
        .required(),
        project: number()
        .required()
      });

    const initialValues = {
        name: '', 
        type: '',
        deadline: '', 
        status: '', 
        client: ''
    }

    const prodNeedInitialValues = {
        description: '',
        type: '',
        note: '',
        deadline: '',
        project:''
    }

    const formik = useFormik({
        initialValues,
        validationSchema: projectSchema,
        onSubmit: (formData) => {

            fetch(`http://127.0.0.1:8000/project/${route.id}`, {
                method: "PATCH",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${user.token}`
                }
            })
            .then(resp => {
                if(resp.ok){

                    return resp.json().then(data => {
                        const updatedUser = {
                            ...user,
                            user: {
                                ...user.user,
                                account_details: {
                                    ...user.user.account_details,
                                    clients: user.user.account_details.clients.map(client => {
                                        if(client.id === data.client) {
                                            return {
                                                ...client,
                                                projects: client.projects.map((project) => {
                                                    if (project.id === data.id) {
                                                        return data
                                                    }
                                                    return project
                                                })
                                            };
                                        }
                                        return client;
                                    })
                                }
                            }
                        };

                        updateUser(updatedUser)
                        handleEditMode()

                        toast.success("Project Updated")

                        

                    })



                }
            })
    
        },
    });

    const prodNeedFormik = useFormik({
        prodNeedInitialValues,
        validationSchema: prodNeedSchema,
        onSubmit: (formData) => { 

        }
    });

    const handleEditMode = () => {
        setEditMode(!editMode)
    }

    const handleCurrentProject = (data) => {
        setCurrentProject(data)
    }

    const handleDelete = () => {
        fetch(`http://127.0.0.1:8000/project/${route.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${user.token}`
            }
        })
        .then(resp => {
            if(resp.ok) {

                return resp.json().then(data => {
                    const updatedUser = {
                        ...user,
                        user: {
                            ...user.user,
                            account_details: {
                                ...user.user.account_details,
                                clients: user.user.account_details.clients.map(client => {
                                    if (client.id == currentProject.client) {
                                        return {
                                            ...client,
                                            projects: client.projects.filter(project => project.id != currentProject.id)
                                        };
                                    }
                                    return client; // Ensure the original client object is returned if no match is found
                                })
                            }
                        }
                    };

                    updateUser(updatedUser)

                    nav('/projects/')
                    toast.success('Project Deleted')

                })
            }
        })
    }

    const handleNewProdNeed = () => {
        setNewProdNeed(!newProdNeed)
    }

    const handleNewBudgItem = () => {
        setNewBudgItem(!newBudgItem)
    }

    useEffect(() => {

        
        if (route.id) { 
            setIsLoading(true)
            fetch(`http://127.0.0.1:8000/project/${route.id}`,{
                headers: {
                    'Authorization': `Token ${user.token}`
                } 
            })
            .then(resp => {
                if(resp.ok){


                    return resp.json().then((data) => {

                        formik.setValues({
                            name: data.name,
                            type: data.type,
                            status: data.status,
                            deadline: data.deadline,
                            client: data.client
                          })

                        setCurrentProject(data)

                        setIsLoading(false)
                    })
                }
            })
        }

        }, [route.id, editMode]);

    useEffect(() => {

        
    }, [currentProject]);


    return(
        <>
        
        {
            isLoading ?

            <div>

                <div className='flex flex-row justify-between mx-4'>
                    <NavLink to={'/projects'} className='flex flex-row text-lg' >
                        <ArrowBackIcon/>
                        <p className='ml-2'>Projects</p>
                    </NavLink>
    
                    <div>
                        <EditIcon onClick={handleEditMode}/>
                        <DeleteIcon onClick={handleDelete}/>
                    </div>
    
                </div>

                

            </div>

            :

            <>
            {
                route.id && routeType.pathname.includes('projects') ?
    
                <>
                
                {
                    editMode ?

                    <div className='fixed inset-0 flex flex-col justify-center items-center transition-colors backdrop-blur'>
    
                        <Formik className='bg-white'>
                        <Form 
                                className='bg-white border flex flex-col'
                                onSubmit={formik.handleSubmit}
                                initialValues={initialValues}>
                                <CloseIcon onClick={handleEditMode} />
                                <label className='p-2 text-4xl'>
                                    EDIT
                                </label>
    
                                <label className='ml-2'>
                                    Name
                                </label>
    
                                <Field 
                                name='name' 
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                type='text'
                                placeholder='Name'
                                className='border m-2 p-1'/>
    
                                {formik.errors.name && formik.touched.name && (
                                    <div className="text-sm text-ocean ml-2"> **{formik.errors.name.toUpperCase()}</div>
                                )}
    
                                <label className='ml-2'>
                                    Type
                                </label>
    
                                <Field 
                                name='type' 
                                type='text'
                                value={formik.values.type}
                                onChange={formik.handleChange}
                                as='select'
                                placeholder='Type'
                                className='border m-2 p-1'>
                                    <option>Select Type</option>
                                    <option value='Ad Campaign'>Ad Campaign</option>
                                    <option>Social Media</option>
                                    <option>Billboard</option>
    
                                </Field>
                                {formik.errors.type && formik.touched.type && (
                                    <div className="text-sm text-ocean ml-2"> **{formik.errors.type.toUpperCase()}</div>
                                )}
                                <label className='ml-2'>
                                    Status
                                </label>
    
                                <Field 
                                name='status' 
                                as='select'
                                placeholder='Status'
                                value={formik.values.status}
                                onChange={formik.handleChange}
                                className='border m-2 p-1'>
                                    <option>Select Status</option>
                                    <option value='Planning'>Planning</option>
                                    <option value='In Progress'>In Progress</option>
                                    <option value='Completed'>Completed</option>
                                </Field>
                                {formik.errors.status && formik.touched.status && (
                                    <div className="text-sm text-ocean ml-2"> **{formik.errors.status.toUpperCase()}</div>
                                )}
    
                                <label className='ml-2'>
                                    Deadline
                                </label>
    
                                <Field 
                                name='deadline' 
                                type='text'
                                value={formik.values.deadline}
                                onChange={formik.handleChange}
                                placeholder='YYYY-MM-DD'
                                className='border m-2 p-1'>
    
                                </Field>
    
                                {formik.errors.deadline && formik.touched.deadline && (
                                    <div className="text-sm text-ocean ml-2"> **{formik.errors.deadline.toUpperCase()}</div>
                                )}
    
                                <label className='ml-2'>
                                    Client
                                </label>
                                <Field 
                                name='client' 
                                as='select'
                                value={formik.values.client}
                                onChange={formik.handleChange}
                                placeholder='Client'
                                className='border m-2 p-1'>
                                    <option value=''>Select Client</option>
                                    {
                                        clientOptions
                                    }
                                    
                                </Field>
                                {formik.errors.client && formik.touched.client && (
                                    <div className="text-sm text-ocean ml-2"> **{formik.errors.client.toUpperCase()}</div>
                                )}
    
                                <button type='submit'>Submit +</button>
    
                                </Form>
                        </Formik>
    
    
    
    
    
    
    
                    </div>
                    :
    
                    <></>
                }
    
                <div className='flex flex-row justify-between mx-4'>
                    <NavLink to={'/projects'} className='flex flex-row text-lg' >
                        <ArrowBackIcon/>
                        <p className='ml-2'>Projects</p>
                    </NavLink>
    
                    <div>
                        <EditIcon onClick={handleEditMode}/>
                        <DeleteIcon onClick={handleDelete}/>
                    </div>
    
                </div>
    
                <div className='border border-black my-4 mx-4 p-4'>
    
                    <div className='flex flex-row justify-between'>
                        <p className='text-4xl bold spacing-[0.5em]'>{currentProject ? currentProject.name : 'UNNAMED'}</p>
                    </div>

                    <div className='flex flex-row justify-between'>
                        <p>{currentProject ? currentProject.client : '___'}</p>
                        <p>{currentProject ? currentProject.status : 'No Status'}</p>
                    </div>

                    <div>

                        <div className='flex flex-row justify-between items-center my-4'>
                            <p className='text-2xl bold'>Tasks</p>
                            <NavLink to='/tasks' className='flex flex-row items-center text-lg'>
                                <p>to Tasks</p>
                                <ArrowRightAltIcon />
                            </NavLink>
                        </div>

                        <div className='flex flex-row items-center'>
                            <div className='w-[20px] h-[20px] bg-doing'></div>
                            <p className='mx-2'>Doing</p>
                            <p>{tasks ? tasks.length : '0'}</p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <div className='w-[20px] h-[20px] bg-blocked'></div>
                            <p className='mx-2'>Blocked</p>
                            <p>{tasks ? tasks.length : '{0'}</p>
                        </div>

                    </div>

                    <div>
                        
                        <div className='flex flex-row justify-between items-center my-6'>
                            <p className='text-2xl bold'>Budgets</p>
                            <NavLink to='/budgets' className='flex flex-row items-center text-lg'>
                                <p>to Budgets</p>
                                <ArrowRightAltIcon />
                            </NavLink>
                        </div>

                        <div className='border w-full h-[25px]'>
                            <div className='bg-ocean h-full w-[65%]'></div>

                        </div>

                        <div className='my-6'>

                            <div className='flex flex-row '>
                                <p className='mr-4'>Budget</p>
                                <p>{currentProject ? '$' + currentProject.budget + '.00' : 'None'}</p>
                            </div>

                            <div className='flex flex-row mr-2'>
                                <p className='mr-4'>Spent</p>
                                <p>{currentProject ? '$' + currentProject.budget + '.00' : 'None'}</p>
                            </div>

                        </div>


                        <div className='my-6'>

                            <p className='my-4'>Details</p>

                            <div className='flex flex-row text-lg'>
                                <p className='mr-4'>Deadline</p>
                                <p>{currentProject ? currentProject.deadline : ""}</p>
                            </div>

                            <div className='flex flex-row text-lg'>
                                <p className='mr-4'>Status</p>
                                <p>{currentProject ? currentProject.status : ""}</p>
                            </div>

                            <div className='flex flex-row text-lg'>
                                <p className='mr-4'>Type</p>
                                <p>{currentProject ? currentProject.type : ""}</p>
                            </div>

                        </div>

                    </div>
    

                </div>
    

    
                </>
    
                
                
                :
    
    
                <NavLink to={`/projects/${id}`} className='max-w-[400px]'>
                    <div className='border border-black my-4 mx-4 p-4 flex flex-col'>

                        <div className='flex flex-row justify-between'>
                            <p className='text-2xl bold spacing-[0.5em]'>{name ? name : 'UNNAMED'}</p>
                            <div className='flex flex-row'>
                                <div className='rounded-[100%] h-[20px] w-[20px] bg-doing border-black'></div>
                                <div className='rounded-[100%] h-[20px] w-[20px] bg-ocean border-black'></div>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between'>
                            <p>{client ? client : 'None'}</p>
                            <p>{deadline ? deadline.slice(5, 10) : 'No Deadline'}</p>
                        </div>

                        <div>

                        </div>
                        
                        
                        
                    </div>
                </NavLink>
                
            }
            </>

        }
        
        
        </>

        

    )
}

export default Project