import Nav from '../src/components/Nav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='text-2xl roboto-slab select-none'>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
