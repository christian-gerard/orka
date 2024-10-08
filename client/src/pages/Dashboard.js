import { useContext } from 'react'
import Project from '../components/Project'
import Client from '../components/Client'
import Task from '../components/Task'
import { UserContext } from '../context/UserContext'
import GridViewIcon from '@mui/icons-material/GridView';


function Dashboard() {

    const { projects, tasks, clients } = useContext(UserContext)

    return(
        <div className='flex flex-col h-full w-full'>

            {/* Page Header */}
            <div className='flex flex-row items-center mb-2 h-[5%]'>
                <GridViewIcon fontSize='small' />
                <p className='text-lg ml-2'>Dashboard</p>
            </div>

            {/* Outstanding Tasks */}
            <div className='border border-[0.2px] h-[35%] w-[95%]'>

                <p className='text-lg p-1 h-[10%]'>Outstanding Tasks</p>

                <div className='overflow-y-scroll h-[90%] w-full'>

                    {
                        tasks.length !== 0 ?

                        tasks.filter(task => task.status !== 'Done').map((task) => 
                            <Task id={task.id} {...task} />
                        )

                        :

                        <div className='h-full w-full flex justify-center items-center'>

                            <h1 className='text-3xl italic mx-2'> No Outstanding Tasks </h1>

                        </div>
                        

                    }

                </div>

            </div>

            {/* Projects */}
            <div className='border border-[0.2px] my-4 h-[25%] w-[95%] flex justify-between flex-col'>
                <p className='text-lg p-1 h-[10%]'>Projects</p>

                <div className='overflow-x-scroll h-[95%] flex flex-row w-full items-center'>
  
                    {
                        projects.length !== 0 ?

                        projects.map((project) => 

                            <Project id={project.id} {...project} />

                        )

                        :

                        <div className='h-full w-full flex justify-center items-center'>

                            <h1 className='text-3xl italic mx-2'> No Current Projects </h1>

                        </div>
                    }

                </div>

            </div>

            {/* Clients */}
            <div className='border w-[95%] border-[0.2px] h-[25%]'>

                <p className='text-lg p-1 h-[10%]'>Clients</p>

                <div className='overflow-x-scroll h-[90%] flex flex-row items-center'>

                    {
                        clients.length !== 0 ?

                        clients.map((client) => 
                            <Client id={client.id} {...client} />
                        )

                        :

                        <div className='h-full w-full flex justify-center items-center'>

                            <h1 className='text-3xl italic mx-2'> No Current Clients</h1>

                        </div>
                    }

                </div>

            </div>

        </div>
    )
}

export default Dashboard