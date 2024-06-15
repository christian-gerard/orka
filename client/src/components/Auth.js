
import {useContext} from 'react'
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import {UserContext} from '../context/UserContext'
import toast from 'react-hot-toast'




function Auth({handleLogin}) {
  const { user,login } = useContext(UserContext)


    const formik = useFormik({
        initialValues: {
          username: '',
          password: ''
        },
        onSubmit: formData => {
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
                console.log(`${user.token} is the user data`)
                toast.success('Login Successful')
                handleLogin()
              })}
            else{
              toast.error('Invalid Login')
            }
          })
          .catch(err => {
            toast.error('Unable to Login')
          })
        },
      });


      return (
        <div className='bg-black text-white py-12 px-8 flex flex-col items-center '>

            <h1 className='text-4xl p-2 tracking-[0.8em] reddit-mono italic'> ORKA </h1>

            <form onSubmit={formik.handleSubmit} className='flex flex-col p-2'>

                <label htmlFor="email" className='text-xl'>UserName</label>
                <input
                    id="username"
                    name="username"
                    type=""
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    className='text-black my-2 p-1 text-lg'
                    placeholder='username'
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
                <button type='button' className='text-[0.8em] mt-4'>Create New User</button>

            </form>



        </div>
      );
}

export default Auth