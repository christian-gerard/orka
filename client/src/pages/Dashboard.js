import { useState, useEffect, useContext } from 'react'
import Project from '../components/Project'
import Client from '../components/Client'
import ToDo from '../components/ToDo'
import { UserContext } from '../context/UserContext'

function Dashboard() {

    const { user } = useContext(UserContext)
    const projects = user.user.account_details.clients.flatMap(client => {
        return client.projects.map((project) => {
            return <Project key={project.id} {...project} company={client.name} />
        })
    })
    const clients = user.user.account_details.clients.flatMap(client => {
        return <Client name={client.name}/>
    })
    const projectNeeds = user.user.account_details.clients.flatMap(client => {
        return client.projects.map((project) => {
            console.log(project)
        })
    })

    useEffect(() => {


    },[user])

    return(
        <div className=' flex flex-col h-full overflow-hidden'>

            <div className='mb-4'>
                <h1 className='text-5xl underline'>Dashboard</h1>

                <h1>{user.user.account_details.name}</h1>
            </div>



            <div className='h-full'>

                <div className='w-full h-[25%]'>
                    <h1 className='text-4xl'>To Do</h1>
                    <div>
                        {
  

                        }
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row w-full h-[75%] '>
                    <div className='w-[70%] overflow-y-scroll'>
                        <h1 className='text-4xl'>Projects</h1>
                        {
                            user ?
                            projects :
                            <h1>None</h1>
                        }
                    </div>

                    <div className='w-[30%]'>
                        <h1 className='text-4xlg'>Clients</h1>
                        <div className='flex flex-col items-center justify-center'>
                        {
                             clients ?
                             clients :
                             <h1>No Clients</h1>
                        }

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dashboard