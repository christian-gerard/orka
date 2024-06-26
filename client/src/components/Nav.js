import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import DetailsIcon from '@mui/icons-material/Details';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import WavesIcon from '@mui/icons-material/Waves';


function Nav() {
    const { logout } = useContext(UserContext)
    const [navOpen, setNavOpen] = useState(true)

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
                        ORKA FOREVER
                    </NavLink>

                </h1>

            
            </div>

            <div className='z-10'>


                { navOpen ?

                    <div className='fixed text-[0.8em] mx-6 border-2 text-white mt-2 p-2 bg-ocean tracking-[0.1em] flex flex-col'>
                    
                        <NavLink to='/dashboard' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Dashboard</NavLink>
                        <NavLink to='/projects' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Projects</NavLink>
                        <NavLink to='/clients' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={handleNav}>Clients</NavLink>
                        <NavLink to='/' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-black w-[100px]' onClick={logout}>Logout</NavLink>                   
                    </div>

                    :

                    <>
                    </>
                
                }


            </div>
        
        </div>

        <div className='hidden sm:block'>
            <div className='bg-black text-white h-full flex flex-col justify-between'>
                <div>

                    <h1 className={ navOpen ? "text-4xl tracking-[0.8em] p-4 flex flex-row reddit-mono italic flex items-center justify-left ml-2.5" : "text-4xl tracking-[0.8em] p-4 flex flex-row reddit-mono italic flex items-center justify-center "  }> 

                        <span className='hover:text-ocean flex flex-row items-center h-[50px] '>
                            <MenuIcon fontSize='xl' onClick={handleNav} className={navOpen ? "mr-6" : ""} />   
                            {
                                navOpen ?
                                <p>ORKA</p>
                                :
                                <></>
                            }
                        </span>


                    </h1>

                    { navOpen ?

                        <div className='text-[1em] mx-6 text-white w-[175px] mt-2 p-2 tracking-[0.1em] flex flex-col'>

                            <NavLink to='/dashboard' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] py-1 flex flex-row items-center' >
                                <GridViewIcon className='mr-2 my-4'/>
                                Dashboard
                            </NavLink>
                            <NavLink to='/projects' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] py-1 flex flex-row items-center' >
                                <DetailsIcon className='mr-2 my-4' />
                                Projects
                            </NavLink>
                            <NavLink to='/clients' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] py-1 flex flex-row items-center'>
                                <PeopleOutlineIcon className='mr-2 my-4' />
                                Clients
                            </NavLink>
                            <NavLink to='/settings' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] py-1  flex flex-row items-center' >
                                <SettingsIcon className='mr-2 my-4' />
                                Settings
                            </NavLink>
                            <NavLink to='/' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] py-1  flex flex-row items-center' onClick={logout}>
                                <ExitToAppIcon className='mr-2 my-4' />
                                Logout
                            </NavLink>

                        </div>

                        :

                        <div className='text-[1em] mx-6 text-white mt-2 p-2 tracking-[0.1em] flex flex-col'>

                            <NavLink to='/dashboard' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-ocean py-1 flex flex-row items-center' onClick={handleNav}>
                                <GridViewIcon className='my-4'/>
                            </NavLink>
                            <NavLink to='/projects' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-ocean  py-1 flex flex-row items-center' onClick={handleNav}>
                                <DetailsIcon className='my-4' />
                            </NavLink>
                            <NavLink to='/clients' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-ocean  py-1 flex flex-row items-center' onClick={handleNav}>
                                <PeopleOutlineIcon className='my-4' />
                            </NavLink>
                            <NavLink to='/settings' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-ocean  py-1  flex flex-row items-center' onClick={handleNav}>
                                <SettingsIcon className='my-4' />
                            </NavLink>
                            <NavLink to='/' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-ocean  py-1  flex flex-row items-center' onClick={logout}>
                                <ExitToAppIcon className='my-4' />
                            </NavLink>

                        </div>

                    }




                </div>




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