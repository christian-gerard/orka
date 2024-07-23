import { SliderTrack } from '@mui/material'
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
      setProjects(data)
    }

    const updateClients = (data) => {
      setClients(data)
    }

    const updateTasks = (data) => {
      setTasks(data)
    }

    const updateExpenses = (data) => {
      setExpenses(data)
    }


    // Update Variables when User updates

    useEffect(() => {
      updateProjects( user ? 
        user.user.account_details.clients.flatMap(client => {

          return client.projects.map((project) => {
              return project
          })

      }) 

      : 

      []
      
      )

      updateClients( user ? user.user.account_details.clients.flatMap(client => {return client}) : [])

      updateTasks( user ? user.user.account_details.clients.flatMap(client => {

        return client.projects.map((project) => {
            return project.tasks.map((tasks) => {
              return tasks.map((task) => {return task})
            })
        })

      })

      :

      []

      )

    }, [user])

    console.log(tasks)

  return (

    <UserContext.Provider value={{user, login, logout, updateUser, projects, clients}}>
        {children}
    </UserContext.Provider>

  )


}


export default UserProvider