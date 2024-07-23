import TaskAltIcon from '@mui/icons-material/TaskAlt';

function Tasks() {

    return (
        <>
            {/* Page Header */}
            <div className='flex flex-row items-center justify-between mb-2'>
                <div className='flex flex-row'>
                    <TaskAltIcon fontSize='small' />
                    <p className='text-lg ml-2'>Tasks</p>
                </div>

                <div>
                    {/* <AddIcon /> */}
                </div>
            </div>

            {/* Tasks */}
            <div className='border border-[0.2px] h-[100%] overflow-y-scroll'>

                <div className='border h-[200px] m-10'>
                    TESTING TESTING
                </div>

            </div>
        
        
        </>
    )
}

export default Tasks