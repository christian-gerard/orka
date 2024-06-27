import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

export const UserContext = createContext()

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const login = (user) => setUser(user)

    const logout = () => {
          try {
              fetch('http://127.0.0.1:8000/auth/logout/', { 
                method: 'POST', 
                headers: {
                    "Authorization": `Token ${user.token}`,
                } 
            }).then((res) => {
                if(res.ok){
                    toast.success('Logged Out')
                    setUser(null)
                }
              })
          } catch (err) {
              throw err
    }}

    const updateUser = (data) => {
      
    }
  

  return (

    <UserContext.Provider value={{user, login, logout}}>
        {children}
    </UserContext.Provider>

  )


}


export default UserProvider