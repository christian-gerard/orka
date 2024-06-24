import Project from '../components/Project'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
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

            <div className='text-4xl w-full flex flex-row justiy-end'>

                <h1 className='underline'>Projects</h1>

                <div className='border border-2 flex flex-row' onClick={handleNewProject}>
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

                    <div className='bg-white border flex flex-col'> 
                        <CloseIcon onClick={handleNewProject}/>
                        <h2 className='m-2 underline'>New Project</h2>
                        <input 
                        placeholder='Name'
                        className='border m-2 p-1'
                        />
                        <input 
                        placeholder='Deadline'
                        className='border m-2 p-1'
                        />
                        <input 
                        placeholder='Status'
                        className='border m-2 p-1'
                        />
                        <select
                        className='border m-2 p-1'
                        >
                            <option>Select Company</option>
                            <option>Jackson & Moran</option>
                            <option>Company</option>
                        </select>
                        <button 
                        type='submit'
                        className='border m-2'
                        >
                           Add Project
                           <AddIcon/>
                    
                        </button>
                    </div>

                </div>
                :
                <>
                </>
            }
        </div>
    )
}

export default Projects