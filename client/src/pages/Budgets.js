import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddBoxIcon from '@mui/icons-material/AddBox';

function Budgets() {
    return (
        <>
            {/* Page Header */}
            <div className='flex flex-row items-center justify-between mb-2 h-[5%]'>
                <div className='flex flex-row items-center'>
                    <AttachMoneyIcon fontSize='small' />
                    <p className='text-lg ml-2'>Budgets</p>
                </div>

                <div>
                    <AddBoxIcon fontSize='medium'/>
                </div>
            </div>

            {/* Tasks */}
            <div className='border border-[0.2px] h-[100%] overflow-y-scroll h-[95%]'>

                <div className='border h-[200px] m-10'>
                    TESTING TESTING
                </div>

            </div>
        
        
        </>
    )
}

export default Budgets