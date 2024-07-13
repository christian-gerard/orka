import Project from '../components/Project'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { UserContext } from '../context/UserContext'
import { useFormik, Formik, Form, Field } from 'formik'
import { object, string, array, number } from "yup";
import DatePicker from 'react-date-picker'
import AddIcon from '@mui/icons-material/Add';
import DetailsIcon from '@mui/icons-material/Details';
import CloseIcon from '@mui/icons-material/Close';

function Projects() {
    const { user, updateUser } = useContext(UserContext)
    const [newProject, setNewProject] = useState(false)
    const [date, dateChange] = useState(null)

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

      const formik = useFormik({
        initialValues,
        validationSchema: projectSchema,
        onSubmit: (formData) => {

            fetch('http://127.0.0.1:8000/project/', {
                method: "POST",
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
                                                projects: [...client.projects, data]
                                            };
                                        }
                                        return client;
                                    })
                                }
                            }
                        };

                        updateUser(updatedUser)

                        handleNewProject()
                        toast.success("Project Added")

                    })



                }
            })
    
        },
      });

    const handleNewProject = () => {
        setNewProject(!newProject)
    }

    const projects = user.user.account_details.clients.flatMap(client => {
        return client.projects.map((project) => {
            return <Project key={project.id} company={client.name} {...project}  />
        })
    })


    const clients = user.user.account_details.clients.map(client => {
        return <option value={client.id}>{client.name}</option>
    })

    return (
 
        <div className='w-full h-full overflow-hidden'>

            <div className='text-4xl  flex flex-row justify-between'>

                <h1 className=''>
                    <DetailsIcon className='mr-2 my-4' />
                    Projects
                </h1>

                <div className='border border-2 flex flex-row text-lg p-1' onClick={handleNewProject}>
                    <p>New</p>
                    <AddIcon />
                </div>

            </div>

            {
                projects.length !== 0
                
                ? 

                <div className='overflow-y-scroll bottom-0'>
                    {projects}
                </div>
                :

                <h1 className='text-3xl w-full h-full flex justify-center align-center'>No Projects</h1>
            }

            {
                newProject ?

                <div className='fixed inset-0 flex flex-col justify-center items-center transition-colors backdrop-blur'>

                    <Formik
                        onSubmit={formik.handleSubmit}
                        initialValues={initialValues}
                    >
                        <Form 
                            className='bg-white border flex flex-col'
                            onSubmit={formik.handleSubmit}
                            initialValues={initialValues}>
                            <CloseIcon onClick={handleNewProject} />
                            <label className='p-2 text-4xl'>
                                New Project
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
                                <option>In Progress</option>
                                <option>Completed</option>
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
                <>
                </>
            }
        </div>
    )
}

export default Projects