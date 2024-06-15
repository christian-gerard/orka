import Client from '../components/Client'


function Clients({name, status}) {

    return (
        <div className=''>
            <div className='text-4xl'>
                <h1 className='underline'>Clients</h1>
            </div>
            <div>

                <Client />
                <Client />
                <Client />

            </div>

        </div>
    )
}

export default Clients