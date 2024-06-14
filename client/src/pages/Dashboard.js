import { useState,useEffect } from 'react'
import Project from '../components/Project'
import Client from '../components/Client'
import ToDo from '../components/ToDo'

function Dashboard() {
    const [prodNeeds, setProdNeeds] = useState([])

    useEffect(() => {

        fetch('/productionneed')
        .then((resp) => { 
            debugger
        })


    },[])


    return(
        <div className=' flex flex-col h-full'>

            <div className='mb-4'>
                <h1 className='text-4xl underline'>Dashboard</h1>
            </div>



            <div className='h-full'>

                <div className='w-full h-[25%]'>
                    <h1>To Do</h1>
                    <div>
                        {
                            prodNeeds ?
                            <h1>Prod Needs Available</h1>
                            :
                            <h1>Prod Needs Unavailable</h1>

                        }
                    </div>
                </div>

                <div className='flex flex-row w-full h-[75%] '>
                    <div className='w-[80%]'>
                        <h1>Projects</h1>
                        <Project />
                        <Project />
                        <Project />
                    </div>

                    <div className='w-[20%]'>
                        <h1>Clients</h1>
                        <div className='flex flex-col items-center justify-center'>
                            <Client />
                            <Client />

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dashboard