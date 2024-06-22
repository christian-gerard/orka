import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Project({id, name, company, description, status, deadline}) {
    const { user } = useContext(UserContext)
    const route = useParams();
    const [currentProject, setCurrentProject] = useState(null)

    const handleCurrentProject = (data) => {
        setCurrentProject(data)
    }
    console.log(user)
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

            <div className='border border-black rounded-xl my-4 mx-4 p-4'>

                <NavLink to={'/projects'} >
                    <ArrowBackIcon/>
                </NavLink>
                <p>{currentProject ? currentProject.name : 'UNNAMED'}</p>
                <p>{company ? company : '___'}</p>
                <p>{status ? status : 'No Status'}</p>
                <p>{currentProject ? currentProject.deadline.slice(0,-10) : 'No Deadline'}</p>
            </div>
            
            
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