import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Error from './Error'
import Auth from '../components/Auth'
import Project from '../components/Project'
import Dashboard from '../pages/Dashboard'
import Projects from '../pages/Projects'
import Clients from '../pages/Clients'
import Settings from '../pages/Settings'



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
                path: '/projects/:id',
                element: <Project />,
            },
            {
                path: '/clients',
                element: <Clients />,
            },
            {
                path: '/settings',
                element: <Settings />,
            }

		]
	}
])

export default router