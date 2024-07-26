
function Expense({id, description, amount, note, project, status, type}) {

    return(
        <div className='text-sm w-full flex flex-row'>

            <div className='w-[80%] border-r-[0.2px]'>
                <p>{description}</p>
            </div>
            <div className='w-[20%]'>
                <p>${amount}</p>
            </div>

        </div>
    )
}

export default Expense