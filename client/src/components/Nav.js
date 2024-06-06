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
        
        <div className=' sm:hidden'>
            <div className='bg-black text-white'>

                <h1 className='text-4xl tracking-[0.8em] p-4 flex flex-row reddit-mono italic'> 

                    <span className='mr-6 hover:text-ocean flex items-center'>
                        <MenuIcon fontSize='xl' onClick={handleNav} />   
                    </span>

                    <NavLink to='/dashboard' className='animate-spacing-reverse hover:animate-spacing-forward hover:text-ocean'>
                        ORKA
                    </NavLink>

                </h1>

            
            </div>

            <div className='z-10'>


                { navOpen ?

                    <div className='fixed text-[0.8em] mx-6 border-2 text-white mt-2 p-2 bg-ocean tracking-[0.1em] flex flex-col'>
                    
                        <NavLink to='/dashboard' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Dashboard</NavLink>
                        <NavLink to='/projects' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Projects</NavLink>
                        <NavLink to='/clients' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Clients</NavLink>
                    
                    </div>

                    :

                    <>
                    </>
                
                }


            </div>
        
        </div>

        <div className='hidden sm:block'>
            <div className='bg-black text-white h-full'>

                <h1 className='text-4xl tracking-[0.8em] p-4 flex flex-row reddit-mono italic'> 

                    <span className='hover:text-ocean flex items-center'>
                        <MenuIcon fontSize='xl' onClick={handleNav} />   
                    </span>

                    { navOpen ? 
                    
                
                        <NavLink to='/dashboard' className='hover:text-ocean ml-6'>
                            ORKA
                        </NavLink>
                        :

                        <>
                        </>
                
                
                
                    }


                </h1>

                { navOpen ?

                    <div className='text-[0.8em] mx-6 border-2 text-white mt-2 p-2 bg-ocean tracking-[0.1em] flex flex-col'>

                        <NavLink to='/dashboard' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Dashboard</NavLink>
                        <NavLink to='/projects' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Projects</NavLink>
                        <NavLink to='/clients' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Clients</NavLink>

                    </div>

                    :

                    <>
                    </>

                }


            </div>

            <div className='z-10'>


                { navOpen ?

                    <div className='fixed text-[0.8em] mx-6 border-2 text-white mt-2 p-2 bg-ocean tracking-[0.1em] flex flex-col'>
                    
                        <NavLink to='/dashboard' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Dashboard</NavLink>
                        <NavLink to='/projects' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Projects</NavLink>
                        <NavLink to='/clients' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Clients</NavLink>
                    
                    </div>

                    :

                    <>
                    </>
                
                }


            </div>

        </div>
        
        
        </>
    )
}

export default Nav