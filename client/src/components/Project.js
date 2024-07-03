import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { object, string, array, number } from "yup";
import { useFormik, Field, Form, Formik } from "formik";
import EditIcon from '@mui/icons-material/Edit';
import ProductionNeed from './ProductionNeed'
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

function Project({id, name, company, description, status, deadline}) {
    const { user, updateUser } = useContext(UserContext)
    const route = useParams();
    const [currentProject, setCurrentProject] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const nav = useNavigate()

    const clients = user.user.account_details.clients.map(client => {
        return <option value={client.id}>{client.name}</option>
    })

    const prod_needs = 3
    
   
    

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

    const initialValues = {
        name: '', 
        type: '',
        deadline: '', 
        status: '', 
        client: ''
    }
    console.log(currentProject)

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

    useEffect(() => {
        if (route.id) { 
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
                    })
                }
            })
        }

        }, [route.id, editMode]);


    return(
        <>
        {
            route.id ?

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
                                    clients
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

            <div className='border border-black rounded-xl my-4 mx-4 p-4'>
                <div className='flex flex-row justify-between'>
                    <NavLink to={'/projects'} >
                        <ArrowBackIcon/>
                    </NavLink>

                    <div>
                        <EditIcon onClick={handleEditMode}/>
                        <DeleteIcon onClick={handleDelete}/>
                    </div>

                </div>
                <p>{currentProject ? currentProject.name : 'UNNAMED'}</p>
                <p>{company ? currentProject.client : '___'}</p>
                <p>{status ? currentProject.status : 'No Status'}</p>
                <p>{currentProject ? currentProject.deadline : 'No Deadline'}</p>
            </div>


            <div className='border border-black rounded-xl my-4 mx-4 p-4'>
                <h1>Prod Needs</h1>
                {prod_needs ? prod_needs : "No Project Tasks"}
            </div>
            
            
            
            </>

            
            
            :


            <NavLink to={`/projects/${id}`}>
                <div className='border border-black rounded-xl my-4 mx-4 p-4'>
                    <p>{name ? name : 'UNNAMED'}</p>
                    <p>{company ? company : '___'}</p>
                    <p>{status ? status : 'No Status'}</p>
                    <p>{deadline ? deadline.slice(0,-10) : 'No Deadline'}</p>
                </div>
            </NavLink>
            
        }
        </>

    )
}

export default Project