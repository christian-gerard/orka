import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import Project from './Project'


function Client({id, name, status}) {
    const { user, updateUser } = useContext(UserContext)
    const route = useParams();
    const [currentClient, setCurrentClient] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const nav = useNavigate()

    const handleEdit = () => {
        setEditMode(!editMode)
    }

    const projects = user.user.account_details.clients.flatMap(client => {
        console.log(client)
        console.log(currentClient)
        if(currentClient && currentClient.id === client.id){
            return client.projects.map((project) => {
                return <Project key={project.id} {...project} company={client.name} />
            })
        }
    })

    const handleDelete = () => {
        fetch(`http://127.0.0.1:8000/client/${route.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${user.token}`
            }
        })
        .then(resp => {
            if(resp.ok) {

                return resp.json().then(data => {
                    const updatedUser = {
                        ...user,
                        user: {
                            ...user.user,
                            account_details: {
                                ...user.user.account_details,
                                clients: user.user.account_details.clients.filter( client => client.id !== currentClient.id)
                            }
                        }
                    };

                    updateUser(updatedUser)

                    nav('/clients/')
                    toast.success('Client Deleted')

                })
            }
        })
    }

    useEffect(() => {
        if (route.id) { 
            fetch(`http://127.0.0.1:8000/client/${route.id}`,{
                headers: {
                    'Authorization': `Token ${user.token}`
                } 
            })
            .then(resp => {
                if(resp.ok){
                    return resp.json().then((data) => {
                        console.log(data)
                        setCurrentClient(data)
                    })
                }
            })
        }

        }, [route.id]);

    return (

        <>

        {
            route.id ?

            <>

            {
                editMode ?
                <div>
                    <h1>EDIT FORM</h1>
                </div>

                :
                <></>
            }
            
            <div>
                <NavLink to={'/clients'}>
                    <ArrowBackIcon />
                </NavLink>
                <DeleteIcon onClick={handleDelete} />
                <EditIcon onClick={handleEdit}/>
                <h1>{currentClient ? currentClient.name : 'untitled'}</h1>
                <p>{currentClient ? currentClient.type : 'Inactive'}</p>
                <p>{currentClient ? currentClient.client_img : 'Inactive'}</p>
                <p>{currentClient ? currentClient.isActive : 'Inactive'}</p>
            </div>

            <div>
                <h1>Projects</h1>
                {
                    projects ? projects : <h1>NONE</h1>
                }
            </div>
            
            
            </>


            :
                <NavLink to={`/clients/${id}`}>
                    <div className='border border-black my-4 rounded-[100%] w-[200px] h-[200px] flex flex-col items-center justify-center my-4 mx-4'>
                        <p>{name ? name : 'untitled'}</p>
                        <p>{status ? status : 'Active'}</p>
                    </div>

                </NavLink>


        }
        
        
        </>

    )
}

export default Client