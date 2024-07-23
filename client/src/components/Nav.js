import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import DetailsIcon from '@mui/icons-material/Details';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TaskAltIcon from '@mui/icons-material/TaskAlt';


function Nav() {

    const { logout, user } = useContext(UserContext)

    const [navOpen, setNavOpen] = useState(true)

    const handleNav = () => {
        setNavOpen(!navOpen)
    }

    return(

        <div className='bg-black text-white'>
        
            {/* Mobile Web Menu */}
            <div className='sm:hidden'>

                {/* Menu Bar + App Title */}
                <div className='text-4xl tracking-[0.6em] p-4 flex flex-row reddit-mono italic'> 

                    <span className='mr-6 hover:text-ocean flex items-center'>
                        <MenuIcon fontSize='xl' onClick={handleNav} />   
                    </span>

                    <NavLink to='/dashboard' className=' flex justify-center hover:text-ocean'>
                        ORKA
                    </NavLink>

                </div>

                {/* Mobile Dropdown Menu */}
                { navOpen ?

                    // Background Blur
                    <div className='fixed inset-0 backdrop-blur'>

                        {/* Menu */}
                        <div className='bg-black'>

                            {/* Menu Bar + App Title */}
                            <div className='text-4xl tracking-[0.6em] p-4 flex flex-row reddit-mono italic'> 

                                <span className='mr-6 hover:text-ocean flex items-center'>
                                    <MenuIcon fontSize='xl' onClick={handleNav} />   
                                </span>

                                <NavLink to='/dashboard' className=' flex justify-center hover:text-ocean'>
                                    ORKA
                                </NavLink>

                            </div>

                            {/* Account Name */}
                            <div className='bg-white text-black flex justify-center'>
                                <p className='text-2xl p-1'>{user.user.account_details.name ? user.user.account_details.name : 'None'}</p>
                            </div>

                            {/* Page Navigation */}
                            <div className='py-4'>

                                <NavLink to='/dashboard' className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] flex items-center ml-4' onClick={handleNav}>
                                    <GridViewIcon className='mr-2 my-4'/>
                                    Dashboard
                                </NavLink>

                                <NavLink to='/projects' className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] flex items-center ml-4' onClick={handleNav}>
                                    <DetailsIcon className='mr-2 my-4' />
                                    Projects
                                </NavLink>

                                <NavLink to='/clients' className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] flex items-center ml-4' onClick={handleNav}>
                                    <PeopleOutlineIcon className='mr-2 my-4' />
                                    Clients
                                </NavLink>

                                <NavLink to='/tasks' className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] flex items-center ml-4' onClick={handleNav}>
                                    <TaskAltIcon className='mr-2 my-4' />
                                    Tasks
                                </NavLink>

                                <NavLink to='/budgets' className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] flex items-center ml-4' onClick={handleNav}>
                                    <AttachMoneyIcon className='mr-2 my-4' />
                                    Budgets
                                </NavLink>

                            </div>
                                    
                            {/* Account Navigation */}
                            <div className='border-t border-white py-2 '>

                                <NavLink to='/settings' className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] flex items-center ml-4' onClick={handleNav}>
                                    <SettingsIcon className='mr-2 my-4' />
                                    Settings
                                </NavLink>

                                <NavLink to='/' className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:text-ocean w-[100px] flex items-center ml-4' onClick={logout}>
                                    <ExitToAppIcon className='mr-2 my-4' />
                                    Logout
                                </NavLink>  

                            </div>

                        </div>

                    </div>

                    :

                    <>
                    </>

                }
            
            </div>
 
            {/* Desktop Menu */}
            <div className='hidden sm:block h-full'>

                <div className='bg-black text-white h-full flex flex-col'>


                        <div className={ navOpen ? "text-4xl tracking-[0.8em] p-4 flex flex-row reddit-mono italic flex items-center justify-left" : "text-4xl tracking-[0.8em] p-4 flex flex-row reddit-mono italic flex items-center justify-left"  }> 

                            <span className='hover:text-ocean flex flex-row items-center h-[50px] '>
                                <MenuIcon fontSize='2xl' onClick={handleNav} /> 
                                { navOpen ? <h1 className='ml-6'>ORKA</h1> : <></>}
                            </span>

                        </div>


                        { navOpen ?

                            // NAV OPEN
                            <div className='text-white mt-2 tracking-[0.1em] flex flex-col justify-between h-full'>

                                {/* Nav Icons */}
                                <div className='flex flex-col items-left ml-6'>

                                    <NavLink to='/dashboard' className='w-[200px] justify-items-start transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center ' >
                                        <GridViewIcon fontSize='xl' className='mr-2'/>
                                        <p>Dashboard</p>
                                    </NavLink>

                                    <NavLink to='/projects' className='w-[200px] justify-items-start transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center ' >
                                        <DetailsIcon className='mr-2' />
                                        <p>Projects</p>
                                    </NavLink>

                                    <NavLink to='/clients' className='w-[200px] justify-start transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center ' >
                                        <PeopleOutlineIcon className='mr-2' />
                                        <p>Clients</p>
                                    </NavLink>

                                    <NavLink to='/tasks' className='w-[200px] justify-start transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center ' >
                                        <TaskAltIcon className='mr-2' />
                                        <p>Tasks</p>
                                    </NavLink>

                                    <NavLink to='/budgets' className='w-[200px] justify-start transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center' >
                                        <AttachMoneyIcon className='mr-2' />
                                        <p>Budgets</p>
                                    </NavLink>

                                </div>

                                {/* Account Icons */}
                                <div className='border-t'>
                                    
                                    <NavLink to='/settings' className='transition my-4 ml-6 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center' >
                                        <SettingsIcon className='mr-2' />
                                        <p>Settings</p>
                                    </NavLink>

                                    <NavLink className='transition my-4 ml-6 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center' onClick={logout}>
                                        <ExitToAppIcon className='mr-2' />
                                        <p>Logout</p>
                                    </NavLink>



                                </div>

                            </div>

                            :

                            // NAV CLOSED
                            <div className='text-white mt-2 tracking-[0.1em] flex flex-col justify-between h-full'>

                                {/* Nav Icons */}
                                <div className='flex flex-col items-left mt-4'>

                                    <NavLink to='/dashboard' className='transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center justify-center ' >
                                        <GridViewIcon fontSize='xl' className=''/>
                                    </NavLink>

                                    <NavLink to='/projects' className='transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center justify-center' >
                                        <DetailsIcon className='' />
                                    </NavLink>

                                    <NavLink to='/clients' className='transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center justify-center' >
                                        <PeopleOutlineIcon className='' />
                                    </NavLink>

                                    <NavLink to='/tasks' className='transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center justify-center' >
                                        <TaskAltIcon className='' />
                                    </NavLink>

                                    <NavLink to='/budgets' className='transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center justify-center' >
                                        <AttachMoneyIcon className='' />
                                    </NavLink>

                                </div>

                                {/* Account Icons */}
                                <div className='border-t'>
                                    
                                    <NavLink to='/settings' className='transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center justify-center'>
                                        <SettingsIcon className='' />
                                    </NavLink>



                                    <NavLink className='transition my-4 ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:text-ocean flex items-center justify-center' onClick={logout}>
                                        <ExitToAppIcon className='' />
                                    </NavLink>



                                </div>

                            </div>

                        }

                </div>

            </div>

        </div>
    )
}

export default Nav