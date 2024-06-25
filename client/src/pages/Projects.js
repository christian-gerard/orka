import Project from '../components/Project'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Formik, Form, Field } from 'formik'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function Projects() {
    const { user } = useContext(UserContext)
    const [newProject, setNewProject] = useState(false)

    const handleNewProject = () => {
        setNewProject(!newProject)
    }

    const projects = user.user.account_details.clients.flatMap(client => {
        return client.projects.map((project) => {
            console.log(project.id)
            return <Project key={project.id} company={client.name} {...project}  />
        })
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

                projects 
                
                :

                <h1>No Name</h1>
            }

            {
                newProject ?

                <div className='fixed inset-0 flex flex-col justify-center items-center transition-colors backdrop-blur'>

                    <Formik
                        initialValues={{name: '', deadline: '', status: '', company: ''}}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        <Form className='bg-white border flex flex-col'>
                            <label className='p-2'>
                                New Project
                            </label>

                            <Field 
                            name='name' 
                            type='text'
                            placeholder='Name'
                            className='border m-2 p-1'/>

                            <Field 
                            name='name' 
                            type='text'
                            placeholder='Deadline'
                            className='border m-2 p-1'/>

                            <Field 
                            name='name' 
                            type='select'
                            as='select'
                            placeholder='Name'
                            className='border m-2 p-1'>
                                <option value=''>Select</option>
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