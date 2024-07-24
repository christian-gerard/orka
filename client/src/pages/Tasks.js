import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Task from '../components/Task'
import AddBoxIcon from '@mui/icons-material/AddBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function Tasks() {

    const { tasks } = useContext(UserContext)
    const [notDoing, setNotDoing] = useState(false)
    const [doing, setDoing] = useState(false)
    const [done, setDone] = useState(false)
    const [blocked, setBlocked] = useState(false)

    const handlenotDoing = () => {
        setNotDoing(!notDoing)
    }

    const handleDoing = () => {
        setDoing(!doing)
    }

    const handleDone = () => {
        setDone(!done)
    }

    const handleBlocked = () => {
        setBlocked(!blocked)
    }

    return (
        <>
            {/* Page Header */}
            <div className='flex flex-row items-center justify-between mb-2 h-[5%]'>
                <div className='flex flex-row items-center'>
                    <TaskAltIcon fontSize='small' />
                    <p className='text-lg ml-2'>Tasks</p>
                </div>

                <div>
                    <AddBoxIcon fontSize='medium'/>
                </div>
            </div>

            {/* Tasks */}
            <div className='border border-[0.2px] h-[95%] overflow-y-scroll'>

                <div className='flex flex-col mx-2'>

                    {/* Not Started*/}
                    <div className='flex flex-row items-center my-2' onClick={handlenotDoing}>

                        {/* Color Indicator */}
                        <div className='bg-notStarted w-[20px] h-[20px] border border-[0.2px] mr-2'>

                        </div>

                        {/* Stage Name */}
                        <p className='mx-2'>Not Started { tasks ? `[${tasks.length}]` : '[0]'}</p>

                        {/* Toggle Logo Depending on State */}

                        {
                            notDoing ?
                            
                            <KeyboardArrowDownIcon fontSize='large' />

                            :

                            <KeyboardArrowLeftIcon fontSize='large' />

                        }

                        
                    </div>

                    {
                        tasks && notDoing ?

                        tasks.map(task => {
                            return <Task id={task.id} {...task} />
                        })

                        :

                        <></>
                    }




                    {/* Doing */}
                    <div className='flex flex-row items-center my-2' onClick={handleDoing}>
                        {/* Color Indicator */}
                        <div className='bg-doing w-[20px] h-[20px] border border-[0.2px] mr-2'>

                        </div>

                        {/* Stage Name */}
                        <p className='mx-2'> Doing { 0 ? [2] : '[0]'}<p>



                            </p>
                            
                        </p>


                        {/* Toggle Logo Depending on State */}

                        {
                            doing ?
                            
                            <KeyboardArrowDownIcon fontSize='large' />

                            :

                            <KeyboardArrowLeftIcon fontSize='large' />

                        }

                        
                    </div>

                    {/* Blocked */}
                    <div className='flex flex-row items-center my-2' onClick={handleBlocked}>
                        {/* Color Indicator */}
                        <div className='bg-blocked w-[20px] h-[20px] border border-[0.2px] mr-2'>

                        </div>

                        {/* Stage Name */}
                        <p className='mx-2'>Blocked { 0 ? [2] : '[0]'}</p>

                        {/* Toggle Logo Depending on State */}

                        {
                            blocked ?
                            
                            <KeyboardArrowDownIcon fontSize='large' />

                            :

                            <KeyboardArrowLeftIcon fontSize='large' />

                        }
                        
                    </div>

                    {/* Done */}
                    <div className='flex flex-row items-center my-2' onClick={handleDone}>
                        {/* Color Indicator */}
                        <div className='bg-done w-[20px] h-[20px] border border-[0.2px] mr-2'>

                        </div>

                        {/* Stage Name */}
                        <p className='mx-2'>Done { 0 ? [2] : '[0]'}</p>


                        {/* Toggle Logo Depending on State */}

                        {
                            done ?
                            
                            <KeyboardArrowDownIcon fontSize='large' />

                            :

                            <KeyboardArrowLeftIcon fontSize='large' />

                        }
                        
                    </div>
                
                </div>

            </div>
        
        
        </>
    )
}

export default Tasks