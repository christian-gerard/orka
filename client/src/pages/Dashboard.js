import { useState, useEffect } from 'react'
import Project from '../components/Project'
import Client from '../components/Client'
import ToDo from '../components/ToDo'

function Dashboard() {

    useEffect(() => {




    },[])


    return(
        <div className=' flex flex-col h-full'>

            <div className='mb-4'>
                <h1 className='text-5xl underline'>Dashboard</h1>
            </div>



            <div className='h-full'>

                <div className='w-full h-[25%]'>
                    <h1 className='text-4xl'>To Do</h1>
                    <div>
                        {
  

                        }
                    </div>
                </div>

                <div className='flex flex-row w-full h-[75%] '>
                    <div className='w-[70%]'>
                        <h1 className='text-4xl'>Projects</h1>
                        <Project 
                            name={'Liquid Death Commercial'} 
                            deadline={'04/30/2024'}
                            company={'Liquid Death'}
                            status={'In Progress'}
                        />
                        <Project 
                            name={'F1 Las Vegas'} 
                            deadline={'06/17/2024'}
                            company={'DropBox'}
                            status={'In Progress'}
                        />
                    </div>

                    <div className='w-[30%]'>
                        <h1 className='text-4xlg'>Clients</h1>
                        <div className='flex flex-col items-center justify-center'>
                            <Client name={'Liquid Death'}/>
                            <Client name={'DropBox'}/>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dashboard