import { useState, useEffect, useContext } from 'react'
import Project from '../components/Project'
import Client from '../components/Client'
import Task from '../components/Task'
import { UserContext } from '../context/UserContext'
import GridViewIcon from '@mui/icons-material/GridView';
import { Grid } from '@mui/material'

function Dashboard() {

    const { user, projects, tasks, expenses, clients } = useContext(UserContext)

    return(
        <div className='flex flex-col h-full'>

            {/* Page Header */}
            <div className='flex flex-row items-center mb-2 h-[5%]'>
                <GridViewIcon fontSize='small' />
                <p className='text-lg ml-2'>Dashboard</p>
            </div>

            {/* Outstanding Tasks */}
            <div className='border border-[0.2px] h-[35%] '>

                <p className='text-lg p-1 h-[10%]'>Outstanding Tasks</p>

                <div className='overflow-y-scroll h-[90%]'>

                    {
                        tasks ?

                        tasks.map((task) => 
                            <Task id={task.id} {...task} />
                        )

                        :
                        
                        <>
                        </>
                    }

                </div>

            </div>

            {/* Projects */}
            <div className='border border-[0.2px] my-4 h-[25%]'>
                <p className='text-lg p-1 h-[10%]'>Projects</p>

                <div className='overflow-x-scroll h-[90%] flex flex-row'>

                    {
                        projects ?

                        projects.map((project) => 
                            <Project id={project.id} {...project} />
                        )
                        :
                        <>
                        </>
                    }

                </div>

            </div>

            {/* Clients */}
            <div className='border border-[0.2px] h-[25%]'>

                <p className='text-lg p-1 h-[10%]'>Clients</p>

                <div className='overflow-x-scroll h-[90%] flex flex-row'>

                    {
                        clients ?

                        clients.map((client) => 
                            <Client id={client.id} {...client} />
                        )
                        :
                        <>
                        </>
                    }

                </div>

            </div>

        </div>
    )
}

export default Dashboard