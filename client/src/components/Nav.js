import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
    const [navOpen, setNavOpen] = useState(false)

    const handleNav = () => {
        setNavOpen(!navOpen)
    }

    return(
        <div className='bg-black text-white'>
            <h1 
            className='
                text-4xl
                tracking-[0.8em]
                p-4
                '> 
                    <MenuIcon onClick={handleNav} className='h-[600px] w-[auto] mr-6 hover:text-ocean' />
                    ORKA 
                </h1>

            { navOpen ?

                <div className='pb-4 ml-12 tracking-[0.2em] flex flex-col z-0'>
                
                    <NavLink to='/dashboard' className='hover:text-ocean w-[100px]' onClick={handleNav}>Dashboard</NavLink>
                    <NavLink to='/projects' className='hover:text-ocean w-[100px]' onClick={handleNav}>Projects</NavLink>
                    <NavLink to='/clients' className='hover:text-ocean w-[100px]' onClick={handleNav}>Clients</NavLink>
                    <NavLink to='/login' className='hover:text-ocean text-2xl underline w-[150px]' onClick={handleNav}>Sign Out</NavLink>
                
                </div>

                :

                <>
                </>
            
            }
        
        </div>
    )
}

export default Nav