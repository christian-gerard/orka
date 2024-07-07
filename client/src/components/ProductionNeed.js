

function ProductionNeed({description, deadline, note, type }) {
    return (
        <div className='border my-2'>
            <h1>{description ? description : 'No Description'}</h1>
            <p>{deadline ? deadline : 'No Deadline'}</p>
            <p>{note ? note : 'No Note'}</p>
            <p>{type ? type : 'No Type'}</p>
            
        </div>
    )
}

export default ProductionNeed