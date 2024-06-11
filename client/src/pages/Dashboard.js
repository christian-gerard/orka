import Project from '../components/Project'
import Client from '../components/Client'
import ToDo from '../components/ToDo'

function Dashboard() {

    return(
        <div className=' flex flex-col h-full'>

            <div className='mb-4'>
                <h1 className='text-4xl underline'>Dashboard</h1>
            </div>



            <div className='h-full'>

                <div className='w-full h-[25%]'>
                    <h1>To Do</h1>
                    <div>
                        <ToDo/>
                        <ToDo/>
                        <ToDo/>
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