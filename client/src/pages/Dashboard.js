import { useState, useEffect, useContext } from 'react'
import Project from '../components/Project'
import Client from '../components/Client'
import ToDo from '../components/ToDo'
import { UserContext } from '../context/UserContext'
import GridViewIcon from '@mui/icons-material/GridView';
import { Grid } from '@mui/material'

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

    const tasks = user.user.account_details.clients.flatMap(client => {
        return client.projects.map((project) => {
            console.log(project)
        })
    })

    useEffect(() => {

    },[user])


    return(
        <div className='flex flex-col h-full'>

            {/* Page Header */}
            <div className='flex flex-row items-center mb-2 h-[5%]'>
                <GridViewIcon fontSize='small' />
                <p className='text-lg ml-2'>Dashboard</p>
            </div>

            {/* Outstanding Tasks */}
            <div className='border border-[0.2px] h-[35%]'>
                <p className='text-lg p-1'>Outstanding Tasks</p>

            </div>

            {/* Projects */}
            <div className='border border-[0.2px] my-4 h-[25%]'>
                <p className='text-lg p-1'>Projects</p>

            </div>

            {/* Clients */}
            <div className='border border-[0.2px] h-[25%]'>
                <p className='text-lg p-1'>Clients</p>

            </div>

        </div>
    )
}

export default Dashboard