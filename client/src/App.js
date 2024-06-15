import { useContext } from 'react'
import {UserContext} from './context/UserContext'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Nav from '../src/components/Nav' 
import Auth from '../src/components/Auth'


function App() {
  const { user } = useContext(UserContext)

  return (
    <div className='text-2xl inconsolata select-none h-screen w-screen '>
        <Toaster
          position='top-center'
          containerClassName='toaster-style'
          toastOptions={{
            success: {
              style: {
                background: '#000000',
                color: 'white'
              },
              iconTheme: {
                primary: '#ffffff',
                secondary: '#000000'
              },
            },
            error: {
              iconTheme: {
                primary: '#ffffff',
                secondary: '#000000'
              },
              style: {
                background: '#000000',
                color: '#ffffff',
              },
            },

          }}
        />
      { user ? 
        <div className='h-full w-full flex flex-col sm:flex-row'>
            <Nav /> 
            <div className='p-4 w-full'>
              <Outlet />
            </div>
        </div>
        :
        <div className='h-full flex items-center justify-center'>
          <Auth />
        </div>
        }
    </div>
  );
}

export default App;
