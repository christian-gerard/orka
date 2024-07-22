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

            <div>
                <h1>Dashboard</h1>
            </div>

        </div>
    )
}

export default Dashboard