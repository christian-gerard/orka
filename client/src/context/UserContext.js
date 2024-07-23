import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

export const UserContext = createContext()

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [account, setAccount] = useState(null)
    const [projects, setProjects] = useState(null)
    const [tasks, setTasks] = useState(null)
    const [expenses, setExpenses] = useState(null)
    const [clients, setClients] = useState(null)


    // Authorization Functions
    const login = (user) => setUser(user)
    const logout = () => {
          setUser(null)
          toast.success('Logged Out')
    }

    // Update Functions
    const updateUser = (data) => {
      setUser(data)
    }

    const updateProjects = (data) => {

    }

    const updateClients = (data) => {
      
    }

    const updateTasks = (data) => {
      
    }

    const updateExpenses = (data) => {
      
    }


    // Update Variables when User updates

    useEffect(() => {

    }, [user])

    console.log(``)

  return (

    <UserContext.Provider value={{user, login, logout, updateUser}}>
        {children}
    </UserContext.Provider>

  )


}


export default UserProvider