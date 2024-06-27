import Project from '../components/Project'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Formik, Form, Field } from 'formik'
import { object, string, array, number } from "yup";
import DatePicker from 'react-date-picker'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function Projects() {
    const { user } = useContext(UserContext)
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
        .required()
        .oneOf(['breakfast', 'lunch', 'dinner', 'snack', 'dessert']),
        client: number()
        .required()
      });

    const handleNewProject = () => {
        setNewProject(!newProject)
    }

    const projects = user.user.account_details.clients.flatMap(client => {
        return client.projects.map((project) => {
            console.log(project.id)
            return <Project key={project.id} company={client.name} {...project}  />
        })
    })

    const clients = user.user.account_details.clients.map(client => {
        return <option value={client.id}>{client.name}</option>
    })

    return (

        <div className='w-full'>

            <div className='text-4xl w-full flex flex-row justify-between'>

                <h1 className='underline'>Projects</h1>

                <div className='border border-2 flex flex-row text-lg p-1' onClick={handleNewProject}>
                    <p>New</p>
                    <AddIcon />
                </div>

            </div>

            {
                projects 
                
                ? 
                <div className='overflow-y-scroll'>
                    projects 
                </div>

                
                :

                <h1>No Name</h1>
            }

            {
                newProject ?

                <div className='fixed inset-0 flex flex-col justify-center items-center transition-colors backdrop-blur'>

                    <Formik
                        initialValues={{
                            name: '', 
                            type: '',
                            deadline: '', 
                            status: '', 
                            client: null
                        }}
                        onSubmit={(values) => {
                            fetch('http://127.0.0.1:8000/project/', {
                                method: "POST",
                                body: JSON.stringify(values),
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Token ${user.token}`
                                }
                            })
                        }}
                        validationSchema={projectSchema}
                    >
                        <Form className='bg-white border flex flex-col'>
                            <CloseIcon onClick={handleNewProject} />
                            <label className='p-2 text-4xl'>
                                New Project
                            </label>

                            <label className='ml-2'>
                                Name
                            </label>

                            <Field 
                            name='name' 
                            type='text'
                            placeholder='Name'
                            className='border m-2 p-1'/>

                            {Formik.errors.name && Formik.touched.name && (
                                <div className=""> **{Formik.errors.name.toUpperCase()}</div>
                            )}

                            <label className='ml-2'>
                                Type
                            </label>

                            <Field 
                            name='type' 
                            type='text'
                            as='select'
                            placeholder='Type'
                            className='border m-2 p-1'>
                                <option>Select Type</option>
                                <option>Ad Campaign</option>
                                <option>Social Media</option>
                                <option>Billboard</option>

                            </Field>

                            <label className='ml-2'>
                                Status
                            </label>

                            <Field 
                            name='status' 
                            as='select'
                            placeholder='Status'
                            className='border m-2 p-1'>
                                <option>Select Status</option>
                                <option>Planning</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </Field>

                            <label className='ml-2'>
                                Deadline
                            </label>

                            <Field 
                            name='deadline' 
                            type='text'
                            placeholder='YYYY-MM-DD'
                            className='border m-2 p-1'>

                            </Field>

                            <label className='ml-2'>
                                Client
                            </label>
                            <Field 
                            name='client' 
                            as='select'
                            placeholder='Client'
                            className='border m-2 p-1'>
                                <option value=''>Select Client</option>
                                {
                                    clients
                                }
                                
                            </Field>


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