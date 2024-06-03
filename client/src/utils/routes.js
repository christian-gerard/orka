import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Error from './Error'
import Auth from '../components/Auth'
import Dashboard from '../pages/Dashboard'
import Projects from '../pages/Projects'
import Clients from '../pages/Clients'



const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
            {
                path: '/login',
                element: <Auth />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/clients',
                element: <Clients />,
            }

		]
	}
])

export default router