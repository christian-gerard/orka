import { useState, useEffect, useContext } from 'react'
import Project from '../components/Project'
import Client from '../components/Client'
import ToDo from '../components/ToDo'
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
                            <div className='text-6xl m-2'> 
                                {task.description}

                            </div>
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

                <div className='overflow-y-scroll h-[90%]'>

                    {
                        projects ?

                        projects.map((project) => 
                            <div className='text-6xl m-2'> 
                                {project.name}

                            </div>
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

                <div className='overflow-y-scroll h-[90%]'>

                    {
                        clients ?

                        clients.map((client) => 
                            <div className='text-6xl m-2'> 
                                {client.name}

                            </div>
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