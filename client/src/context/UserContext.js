import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const login = (user) => setUser(user)
    const logout = () => {
          try {
              fetch('/logout', { method: 'DELETE' }).then((res) => {
                  if (res.status === 204) {
                      setUser(null)

                  } else {
                  }
              })
          } catch (err) {
              throw err
    }}
  

  return (

    <UserContext.Provider value={{user, login, logout}}>
        {children}
    </UserContext.Provider>

  )


}


export default UserProvider