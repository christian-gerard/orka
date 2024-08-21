import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav'

function Welcome() {
    return (
        <div className='text-2xl inconsolata select-none h-screen w-screen flex justify-between flex-col'>
            <div className='h-[95%]'>
                <h1 className='tracking-[0.8em] text-4xl flex justify-center p-1 bg-black text-white h-[5%]'>ORKA</h1>
                <div className='overflow-y-scroll h-[95%]'>
                    <p className='text-lg m-4'>
                        Orka is a production management tool built for small ad agencies that want to keep things simple and tidy. Track Projects and their budgets.
                        Assign action items to your team members.
                    </p>
                    <p className='text-lg m-4'>
                        Orka Orka Orka Orka
                    </p>
                    <NavLink to='/' className='m-4 bg-black text-white p-2'>Sign Up for ORKA</NavLink>
                        
                </div>
            </div>
            
            
            <div className='bg-black text-white text-lg p-1 flex justify-center h-[5%]'>
                <p>Built by Christian Gerard</p>
            </div>

        </div>
    )
}

export default Welcome