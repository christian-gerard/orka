import Project from '../components/Project'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
function Projects() {
    const { user } = useContext(UserContext)

    const projects = user.user.account_details.clients.flatMap(client => {
        return client.projects.map((project) => {
            console.log(project.id)
            return <Project key={project.id} company={client.name} {...project}  />
        })
    })

    return (
        <div className=''>
            <div className='text-4xl'>
                <h1 className='underline'>Projects</h1>

            </div>
            {
                projects ? 
                projects :
                <h1>No Name</h1>
            }
        </div>
    )
}

export default Projects