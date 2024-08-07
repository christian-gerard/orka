
import { useContext, useState } from 'react'
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import { useNavigate, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import toast from 'react-hot-toast'

function Auth({handleLogin}) {
  const { user, login } = useContext(UserContext)
  const [newUser, setNewUser] = useState(false)
  const nav = useNavigate()

  const handleNewUser = () => {
    setNewUser(!newUser)
  }

    const formik = useFormik({
        initialValues: newUser ? 
        {
          email: '',
          password: '',
          account_name: ''
        } 
        : 
        {
          username: '',
          password: ''
        },
        onSubmit: newUser ? 
        
        formData => 
        
        {
          formData['username'] = formData['email']

          fetch('postgresql://orka:HlDS5ziSO2mn7yY5Fe7ygVpJgA4AbmKp@dpg-cqmligg8fa8c73aelkt0-a.oregon-postgres.render.com/orka_hqs2/auth/signup/',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          .then(resp => {
            if(resp.ok){
              return resp.json().then(data => {
                login(data)
                nav('/dashboard')
                toast.success('Login Successful')

              })}
          })
          .then(() => {

          })
          .catch(err => {
            toast.error('Unable to Login')
          })


        } 
        
        : 
        
        formData => 
        
        {

          fetch('http://127.0.0.1:8000/auth/login/',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          .then(resp => {
            if(resp.ok){
              return resp.json().then(data => {
                login(data)
                nav('/dashboard')
                toast.success('Login Successful')

              })}
          })
          .then(() => {

          })
          .catch(err => {
            toast.error('Unable to Login')
          })
        },
      });


      return (
        <>
        {
          newUser ?
          
          <div className='bg-black text-white py-12 px-8 flex flex-col items-center '>
            <h1 className='text-4xl p-2 tracking-[0.8em] reddit-mono italic'> ORKA </h1>
            <h3>SIGNUP</h3>

            <form onSubmit={formik.handleSubmit} className='flex flex-col p-2'>
  
              <label htmlFor="username" className='text-xl'>Email</label>
              <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className='text-black my-2 p-1 text-lg'
                  placeholder='email'
              />

              <label htmlFor="password" className='text-xl'>Password</label>
              <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className='text-black my-2 p-1 text-lg'
                  placeholder='password'
              />


              <label htmlFor="account_name" className='text-xl'>Account Name</label>
              <input
                  id="account_name"
                  name="account_name"
                  type="account_name"
                  onChange={formik.handleChange}
                  value={formik.values.account_name}
                  className='text-black my-2 p-1 text-lg'
                  placeholder='Account Name'
              />

              <button type="submit" className='mt-4 bg-white text-black'>Create Account</button>

            </form>

            <button type='button' className='mt-6' onClick={handleNewUser}>
                    Log In
            </button>

          </div>

          :

          <div className='bg-black text-white py-12 px-8 flex flex-col items-center '>
  
              <h1 className='text-4xl p-2 tracking-[0.8em] reddit-mono italic'> ORKA </h1>
  
              <form onSubmit={formik.handleSubmit} className='flex flex-col p-2'>
  
                  <label htmlFor="username" className='text-xl'>Email</label>
                  <input
                      id="username"
                      name="username"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      className='text-black my-2 p-1 text-lg'
                      placeholder='email'
                  />
  
                  <label htmlFor="password" className='text-xl'>Password</label>
                  <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      className='text-black my-2 p-1 text-lg'
                      placeholder='password'
                  />
              
                  <button type="submit" className='mt-4 bg-white text-black'>Log In</button>
                  <button type='button' className='mt-6' onClick={handleNewUser}>
                    Create New User
                  </button>

  
              </form>
  
  
  
          </div>


        }
        
        </>
      );
}

export default Auth