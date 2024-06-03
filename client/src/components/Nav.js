import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
    const [navOpen, setNavOpen] = useState(false)

    const handleNav = () => {
        setNavOpen(!navOpen)
    }

    return(
        <>
            <h1 
            className='
                text-4xl 
                bg-black 
                text-white
                tracking-[0.8em]
                p-4
                '> 
                    <MenuIcon onClick={handleNav} className='h-[600px] w-[auto] mr-6' />
                    ORKA 
                </h1>

            { navOpen ?
                <>
                
                    <p>Dashboard</p>
                    <p>Clients</p>
                    <p>Projects</p>
                
                </>

                :

                <></>
            
            }
        
        </>
    )
}

export default Nav