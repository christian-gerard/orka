import Nav from '../src/components/Nav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='text-2xl reddit-mono select-none z=0'>
      <Nav /> 
      <Outlet />
    </div>
  );
}

export default App;
