import Client from '../components/Client'
import { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useFormik, Formik, Form, Field } from 'formik'
import { UserContext } from '../context/UserContext'
import CloseIcon from '@mui/icons-material/Close';
import { object, string, array, number } from "yup";


function Clients() {
    const { user,updateUser } = useContext(UserContext)
    const [newClient, setNewClient] = useState(false)
    const clients = user.user.account_details.clients.flatMap(client => {
        return <Client key={client.id} {...client}/>
    })

    const clientSchema = object({
        name: string()
        .required(),
        type: string()
        .required(),
        account: number()
        .required()
      });

    const initialValues = {
        name: '', 
        type: '',
        account: ''
    }

    const formik = useFormik({
        initialValues,
        validationSchema: clientSchema,
        onSubmit: (formData) => {

            fetch('http://127.0.0.1:8000/client/', {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${user.token}`
                }
            })
            .then(resp => {
                if(resp.ok){
        
                    return resp.json().then(data => {
                        const updatedUser = {
                            ...user,
                            user: {
                                ...user.user,
                                account_details: {
                                    ...user.user.account_details,
                                    clients: [...user.user.account_details.clients,data]
                                
                                }
                            }
                        };
        
                        updateUser(updatedUser)
        
                        handleNewClient()
                        toast.success("Project Added")
        
                    })
        
        
        
                }
            })



        }
    })




    const handleNewClient = () => {
        setNewClient(!newClient)
    }


    return (
        <>
        {
            newClient ?
            <div className='fixed inset-0 flex flex-col justify-center items-center transition-colors backdrop-blur'>
                <CloseIcon onClick={handleNewClient} />
                <Formik 
                    onSubmit={formik.handleSubmit}
                    initialValues={initialValues}
                >
                    <Form className='bg-white border flex flex-col'>

                        <Field
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            type='text'
                            placeholder='Name'
                            className='border m-2 p-2'
                        />

                        {formik.errors.name && formik.touched.name && (
                            <div className="text-sm text-ocean ml-2"> **{formik.errors.name.toUpperCase()}</div>
                        )}


                        <Field
                            name='type'
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            type='text'
                            placeholder='type'
                            className='border m-2 p-2'
                        />

                        {formik.errors.type && formik.touched.type && (
                            <div className="text-sm text-ocean ml-2"> **{formik.errors.type.toUpperCase()}</div>
                        )}


                        <Field
                            name='isActive'
                            value={formik.values.isActive}
                            onChange={formik.handleChange}
                            type='text'
                            placeholder='Active?'
                            className='border m-2 p-2'
                        />

                        {formik.errors.isActive && formik.touched.isActive && (
                            <div className="text-sm text-ocean ml-2"> **{formik.errors.isActive.toUpperCase()}</div>
                        )}


                        <Field
                            name='Client Image'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            type='text'
                            placeholder='Name'
                            className='border m-2 p-2'
                        />

                        {formik.errors.name && formik.touched.name && (
                            <div className="text-sm text-ocean ml-2"> **{formik.errors.name.toUpperCase()}</div>
                        )}

                        <button type='submit'> + Add Client </button>


                    </Form>

                </Formik>
            </div>

            :

            <>
            </>

        }
        <div className=''>
            <div className='text-4xl'>
                <h1 className='underline'>Clients</h1>
                <div onClick={handleNewClient}>
                    <h1>+ NEW</h1>
                </div>
            </div>
            <div>

                {
                    clients ? 
                    clients : 
                    <h1>No Clients</h1>
                }

            </div>

        </div>
        </>
    )
}

export default Clients