

function Client({name, status}) {


    return (

        <div className='border border-black my-4 rounded-[100%] w-[200px] h-[200px] flex flex-col items-center justify-center my-4 mx-4'>
            <p>{name ? name : 'untitled'}</p>
            <p>{status ? status : 'Active'}</p>
        </div>
    )
}

export default Client