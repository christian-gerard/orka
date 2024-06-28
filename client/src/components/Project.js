import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

function Project({id, name, company, description, status, deadline}) {
    const { user, updateUser } = useContext(UserContext)
    const route = useParams();
    const [currentProject, setCurrentProject] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const nav = useNavigate()

    console.log(currentProject)
    const handleEditMode = () => {
        setEditMode(!editMode)
    }

    const handleCurrentProject = (data) => {
        setCurrentProject(data)
    }

    const handleDelete = () => {
        fetch(`http://127.0.0.1:8000/project/${route.id}`, {
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
                                clients: user.user.account_details.clients.map(client => {
                                    if (client.id == currentProject.client) {
                                        return {
                                            ...client,
                                            projects: client.projects.filter(project => project.id != currentProject.id)
                                        };
                                    }
                                    return client; // Ensure the original client object is returned if no match is found
                                })
                            }
                        }
                    };

                    updateUser(updatedUser)

                    nav('/projects/')
                    toast.success('Project Deleted')

                })
            }
        })
    }

    useEffect(() => {
        if (route.id) { 
            fetch(`http://127.0.0.1:8000/project/${route.id}`,{
                headers: {
                    'Authorization': `Token ${user.token}`
                } 
            })
            .then(resp => {
                if(resp.ok){
                    return resp.json().then((data) => {
                        console.log(data)
                        setCurrentProject(data)
                    })
                }
            })
        }

        }, [route.id]);


    return(
        <>
        {
            route.id ?

            <>
            
            {
                editMode ?
                <div className=''>
                    <h1>EDIT FORM</h1>
                    <CloseIcon onClick={handleEditMode}/>
                </div>
                :

                <></>
            }

            <div className='border border-black rounded-xl my-4 mx-4 p-4'>
                <div className='flex flex-row justify-between'>
                    <NavLink to={'/projects'} >
                        <ArrowBackIcon/>
                    </NavLink>

                    <div>
                        <EditIcon onClick={handleEditMode}/>
                        <DeleteIcon onClick={handleDelete}/>
                    </div>

                </div>
                <p>{currentProject ? currentProject.name : 'UNNAMED'}</p>
                <p>{company ? company : '___'}</p>
                <p>{status ? status : 'No Status'}</p>
                <p>{currentProject ? currentProject.deadline : 'No Deadline'}</p>
            </div>
            
            
            
            </>

            
            
            :


            <NavLink to={`/projects/${id}`}>
                <div className='border border-black rounded-xl my-4 mx-4 p-4'>
                    <p>{name ? name : 'UNNAMED'}</p>
                    <p>{company ? company : '___'}</p>
                    <p>{status ? status : 'No Status'}</p>
                    <p>{deadline ? deadline.slice(0,-10) : 'No Deadline'}</p>
                </div>
            </NavLink>
            
        }
        </>

    )
}

export default Project