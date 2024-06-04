
import { Formik, Form, Field, useFormik } from "formik";



function Auth() {

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: formData => {
          console.log(formData);
        },
      });


      return (
        <div className='bg-black text-white m-12 rounded-lg p-4 '>

            <h1 className='text-4xl p-2'> Log In</h1>

            <form onSubmit={formik.handleSubmit} className='flex flex-col p-2'>

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className='text-black rounded-lg m-2'
                    placeholder='email'
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className='text-black rounded-lg m-2'
                />
            
                <button type="submit">Log In</button>

            </form>


        </div>
      );
}

export default Auth