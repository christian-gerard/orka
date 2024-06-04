import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
    const [navOpen, setNavOpen] = useState(false)

    const handleNav = () => {
        setNavOpen(!navOpen)
    }

    return(
        <>
            <div className='bg-black text-white'>

                <h1 className='text-4xl tracking-[0.8em] p-4 flex flex-row'> 

                    <span className='mr-6 hover:text-ocean flex items-center '>
                        <MenuIcon fontSize='xl' onClick={handleNav} />   
                    </span>

                    ORKA
                </h1>

            
            </div>

            <div className='z-10'>


                { navOpen ?

                    <div className='fixed text-[0.8em] mx-6 my-4 p-2 bg-ocean tracking-[0.1em] flex flex-col'>
                    
                        <NavLink to='/dashboard' className='hover:text-ocean w-[100px]' onClick={handleNav}>Dashboard</NavLink>
                        <NavLink to='/projects' className='hover:text-ocean w-[100px]' onClick={handleNav}>Projects</NavLink>
                        <NavLink to='/clients' className='hover:text-ocean w-[100px]' onClick={handleNav}>Clients</NavLink>
                        <NavLink to='/login' className='hover:text-ocean underline w-[150px]' onClick={handleNav}>Sign Out</NavLink>
                    
                    </div>

                    :

                    <>
                    </>
                
                }


            </div>
        
        </>
    )
}

export default Nav