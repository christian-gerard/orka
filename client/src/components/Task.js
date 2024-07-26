import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useState } from 'react'

function Task({id, description, deadline, project, type, note, status}) {

    const [taskStatus, setTaskStatus] = useState(false)
    console.log(taskStatus)

    const handleTaskStatus = () => {
        setTaskStatus(!taskStatus)
    }

    const markAsDone = () => {

        

    }

    return (
        <div className={taskStatus ?  'border border-[0.2px] text-lg text-gray flex flex-row items-center my-2 mx-2 justify-between ' : 'border border-[0.2px] text-lg flex flex-row items-center my-2 mx-2 justify-between'} >
            <div className='flex flex-row'>
                <DragIndicatorIcon />
                <p className={taskStatus ? 'line-through' : ''}>{description}</p>
                
            </div>

            <div className='flex flex-row items-center'>
                <p className='mx-3'>{project}</p>
            <p className=''>{taskStatus ? 'Done' : status}</p>
                <input 
                    type='checkbox'
                    className=' border h-[25px] w-[25px] mx-3'
                    onClick={handleTaskStatus}
                    value={taskStatus} 
                    >
                </input>
            
            </div>
        </div>
    )
}

export default Task