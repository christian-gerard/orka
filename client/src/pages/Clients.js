import Client from '../components/Client'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'


function Clients() {
    const { user } = useContext(UserContext)
    const clients = user.user.account_details.clients.flatMap(client => {
        return <Client name={client.name}/>
    })

    return (
        <div className=''>
            <div className='text-4xl'>
                <h1 className='underline'>Clients</h1>
            </div>
            <div>

                {
                    clients ? 
                    clients : 
                    <h1>No Clients</h1>
                }

            </div>

        </div>
    )
}

export default Clients