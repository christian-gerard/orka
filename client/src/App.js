import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../src/components/Nav' 
import Auth from '../src/components/Auth'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const handleLogin = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <div className='text-2xl inconsolata select-none h-screen w-screen '>
      { loggedIn ? 
        <div className='h-full w-full flex flex-col sm:flex-row'>
            <Nav /> 
            <div className='p-4 w-full'>
              <Outlet />
            </div>
        </div>
        :
        <div className='h-full flex items-center justify-center'>
          <Auth handleLogin={handleLogin}/>
        </div>
        }
    </div>
  );
}

export default App;
