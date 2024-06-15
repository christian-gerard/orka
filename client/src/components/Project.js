

function Project({name, company, description, status, deadline}) {

    return(
        <div className='border border-black rounded-xl my-4 mx-4 p-4'>
            <p>{name ? name : 'UNNAMED'}</p>
            <p>{company ? company : '___'}</p>
            <p>{status ? status : 'No Status'}</p>
            <p>{deadline ? deadline : 'No Deadline'}</p>
        </div>
    )
}

export default Project