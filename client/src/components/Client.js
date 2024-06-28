import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';


function Client({id, name, status}) {
    const { user, updateUser } = useContext(UserContext)
    const route = useParams();
    const [currentClient, setCurrentClient] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const nav = useNavigate()

    const handleEdit = () => {
        setEditMode(!editMode)
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
                <DeleteIcon />
                <EditIcon onClick={handleEdit}/>
                <h1>{currentClient ? currentClient.name : 'untitled'}</h1>
                <p>{currentClient ? currentClient.type : 'Inactive'}</p>
                <p>{currentClient ? currentClient.client_img : 'Inactive'}</p>
                <p>{currentClient ? currentClient.isActive : 'Inactive'}</p>
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