
import { Formik, Form, Field, useFormik } from "formik";



function Auth({handleLogin}) {

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: formData => {
          handleLogin()
        },
      });


      return (
        <div className='bg-black text-white py-12 px-8 flex flex-col items-center '>

            <h1 className='text-4xl p-2 tracking-[0.8em] reddit-mono italic'> ORKA </h1>

            <form onSubmit={formik.handleSubmit} className='flex flex-col p-2'>

                <label htmlFor="email" className='text-xl'>Email</label>
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
            
                <button type="submit" className='mt-4 bg-white text-black'>Log In</button>

            </form>


        </div>
      );
}

export default Auth