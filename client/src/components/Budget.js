import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useParams } from 'react-router-dom'
import { Formik, useFormik, Form, Field } from 'formik'
import { object, string, array, number } from "yup";
import { toast } from 'react-hot-toast'
import AddBoxIcon from '@mui/icons-material/AddBox';


function Budget({}) {

    const route = useParams();

    const { user, updateUser } = useContext(UserContext)
    const [budgItems, setBudgItems] = useState([])
    const [newProdNeed, setNewProdNeed] = useState(false)

    const handleNewProdNeed = () => {
        setNewProdNeed(!newProdNeed)
    }

    const prodNeedSchema = object({
        name: string(),
        amount: number(),
        description: string(),
        type: string(),
        note: string(),
        deadline: string(),
        project: number()
      });

    const initialValues = {
        name: '',
        amount: 0,
        description: '',
        type: '',
        note: '',
        deadline: '',
        project:''
    }

    const formik = useFormik({
        initialValues,
        validationSchema: prodNeedSchema,
        onSubmit: (formData) => { 



            // Add Project to Form Data

            formData['project'] = parseInt(route.id)

            console.log(formData)


            fetch('http://127.0.0.1:8000/budgetitem/', {
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
                                    clients: user.user.account_details.clients.map(client => {
                                        if(client.id === data.client) {
                                            return {
                                                ...client,
                                                projects: client.projects.map((project) => {
                                                    if (project.id === data.id) {
                                                        return {
                                                            ...project,
                                                            budg_items: [...project.budg_items, data]
                                                        }
                                                    }
                                                    return project
                                                })
                                            };
                                        }
                                        return client;
                                    })
                                }
                            }
                        };

                        updateUser(updatedUser)

                        toast.success("Budget Item Added")

                        

                    })



                }
            })
        }
      });


    useEffect(() => {
        fetch('http://127.0.0.1:8000/budgetitem/', {
            headers: {
                'Authorization': `Token ${user.token}`
            }

        })
        .then(resp => {
            if(resp.ok){
                return  resp.json().then(data => {
                    setBudgItems(data)
                })
            }
        })

    }, [])


    return (

        <>
        {
            route.id ?            
            
            <div className='border border-black rounded-xl my-4 mx-4 p-4 h-full '>
                <div className='flex flex-row justify-between h-[10%]'>
                    <h1>Expenses</h1>
                    <AddBoxIcon onClick={handleNewProdNeed}/>

                </div>


                <div className='flex flex-col h-[90%] w-full flex mb-2'>

                    <div className='border-b-[0.2px] h-[95%]'>

                        <div className='h-full w-[80%] border-r-[0.2px]'>
                            <Formik>
                                <Form
                                    className='flex flex-row'
                                    onSubmit={formik.handleSubmit}
                                    initialValues={initialValues}
                                >

                                    <Field 
                                        name='name'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        type='text'
                                        className='text-sm border-[0.2px] w-[10%] h-[25px]'
                                        placeholder='name'
                                        
                                    >
                                    </Field>

                                    {formik.errors.name && formik.touched.name && (
                                        <div className="text-sm text-ocean ml-2"> **{formik.errors.name.toUpperCase()}</div>
                                    )}
                                    <Field 
                                        name='description'
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        type='text'
                                        className='border my-2 p-1 w-[200px]'
                                        placeholder='description'
                                        
                                    >
                                    </Field>

                                    {formik.errors.description && formik.touched.description && (
                                        <div className="text-sm text-ocean ml-2"> **{formik.errors.description.toUpperCase()}</div>
                                    )}

                                    <Field 
                                        name='type'
                                        value={formik.values.type}
                                        onChange={formik.handleChange}
                                        as='select'
                                        type='text'
                                        className='border m-2 p-1 w-[100px]'
                                        placeholder='type'
                                    >
                                        <option>Select Here</option>
                                        <option>Organization</option>
                                        <option>Production</option>
                                        <option>Lead Work</option>
                                    </Field>

                                    {formik.errors.type && formik.touched.type && (
                                        <div className="text-sm text-ocean ml-2"> **{formik.errors.type.toUpperCase()}</div>
                                    )}
                                    
                                    <Field 
                                        name='note'
                                        value={formik.values.note}
                                        onChange={formik.handleChange}
                                        type='text'
                                        className='border m-2 p-1 w-[100px]'
                                        placeholder='note'
                                    >
                                        
                                    </Field>

                                    {formik.errors.note && formik.touched.note && (
                                        <div className="text-sm text-ocean ml-2"> **{formik.errors.note.toUpperCase()}</div>
                                    )}

                                    <Field 
                                        name='deadline'
                                        value={formik.values.deadline}
                                        onChange={formik.handleChange}
                                        type='text'
                                        className='border m-2 p-1 w-[100px]'
                                        placeholder='note'
                                    >
                                        
                                    </Field>

                                    {formik.errors.deadline && formik.touched.deadline && (
                                        <div className="text-sm text-ocean ml-2"> **{formik.errors.deadline.toUpperCase()}</div>
                                    )}
                                    <button type='submit'>+</button>
                                </Form>
                            </Formik>

                        </div>

                        <div className='h-full'>
                        </div>


                    </div>

                    <div className='flex flex-row h-[5%] w-full'>

                        <div className='border-r-[0.2px] w-[80%] bg-ocean h-full'>
                            
                        </div>

                        <div className='w-[20%] bg-ocean h-full text-sm'>
                            Total: $100,000.25
                            
                        </div>

                    </div>
                    



                

                </div>

            </div>

            :

            <div className='border my-2'>
                {/* <h1>{description ? description : 'No Description'}</h1>
                <p>{deadline ? deadline : 'No Deadline'}</p>
                <p>{note ? note : 'No Note'}</p>
                <p>{type ? type : 'No Type'}</p> */}
            </div>

        }
        
        </>
    )
}

export default Budget