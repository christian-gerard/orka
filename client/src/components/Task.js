import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function Task({id, description, deadline, project, type, note, status}) {

    return (
        <div className='border border-[0.2px] text-lg flex flex-row items-center my-2 mx-2 justify-between'>
            <div className='flex flex-row'>
                <DragIndicatorIcon />
                <p>{description}</p>
            </div>

            <div className='flex flex-row'>
            </div>
        </div>
    )
}

export default Task