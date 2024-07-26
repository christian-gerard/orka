import { useState, useContext } from 'react'
import { useFormik, Formik, Form, Field } from 'formik'
import { toast } from 'react-hot-toast'
import CloseIcon from '@mui/icons-material/Close';
import { UserContext } from '../context/UserContext'
import { object, string, array, number, bool } from "yup";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Task from '../components/Task'
import AddBoxIcon from '@mui/icons-material/AddBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function Tasks() {

    const { tasks, user, updateUser } = useContext(UserContext)
    const [notDoing, setNotDoing] = useState(false)
    const [doing, setDoing] = useState(false)
    const [done, setDone] = useState(false)
    const [newTask, setNewTask] = useState(false)
    const [blocked, setBlocked] = useState(false)

    const handlenotDoing = () => {
        setNotDoing(!notDoing)
    }

    const handleDoing = () => {
        setDoing(!doing)
    }

    const handleDone = () => {
        setDone(!done)
    }

    const handleBlocked = () => {
        setBlocked(!blocked)
    }

    const handleNewTask= () => {
        setNewTask(!newTask)
    }










    const taskSchema = object({
        name: string()
        .required(),
        type: string(),
        account: number(),

      });

    const initialValues = {
        name: '', 
        type: '',
        isActive: null,
        account: user.user.account_details.id
    }

    const formik = useFormik({
        initialValues,
        validationSchema: taskSchema,
        onSubmit: (formData) => {


            fetch('http://127.0.0.1:8000/task/', {
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
        
                        handleNewTask()
                        toast.success("Project Added")
        
                    })
        
        
        
                }
            })



        }
    })



    return (
        <>

            {
                newTask ?

                <div className='fixed inset-0 flex flex-col justify-center items-center transition-colors backdrop-blur'>
                    <div className='bg-white border'>
                        <CloseIcon onClick={handleNewTask} />
                        <Formik 
                            onSubmit={formik.handleSubmit}
                            initialValues={initialValues}
                        >
                            <Form 
                            className=' flex flex-col'
                            onSubmit={formik.handleSubmit}
                            initialValues={initialValues}
                            >
                                <label> New Task </label>

                                <label> Description </label>
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


                                <label> Client Type </label>

                                <Field
                                    name='type'
                                    value={formik.values.type}
                                    onChange={formik.handleChange}
                                    as='select'
                                    type='text'
                                    placeholder='type'
                                    className='border m-2 p-2'
                                >
                                    <option value=''>Select Type</option>
                                    <option value='CPG'>CPG</option>
                                    <option value='Brands'>Brands</option>
                                </Field>

                                {formik.errors.type && formik.touched.type && (
                                    <div className="text-sm text-ocean ml-2"> **{formik.errors.type.toUpperCase()}</div>
                                )}



                                <button type='submit'> + Add Task </button>


                            </Form>

                        </Formik>
                    </div>
                </div>

                :

                <>
                </>

            }


            {/* Page Header */}
            <div className='flex flex-row items-center justify-between mb-2 h-[5%]'>
                <div className='flex flex-row items-center'>
                    <TaskAltIcon fontSize='small' />
                    <p className='text-lg ml-2'>Tasks</p>
                </div>

                <div>
                    <AddBoxIcon fontSize='medium' onClick={handleNewTask}/>
                </div>
            </div>

            {/* Tasks */}
            <div className='border border-[0.2px] h-[95%] overflow-y-scroll'>

                <div className='flex flex-col mx-2'>

                    {/* Not Started*/}
                    <div className='flex flex-row items-center my-2' onClick={handlenotDoing}>

                        {/* Color Indicator */}
                        <div className='bg-notStarted w-[20px] h-[20px] border border-[0.2px] mr-2'>

                        </div>

                        {/* Stage Name */}
                        <p className='mx-2'>Not Started { tasks ? `[${tasks.length}]` : '[0]'}</p>

                        {/* Toggle Logo Depending on State */}

                        {
                            notDoing ?
                            
                            <KeyboardArrowDownIcon fontSize='large' />

                            :

                            <KeyboardArrowLeftIcon fontSize='large' />

                        }

                        
                    </div>

                    {
                        tasks && notDoing ?

                        tasks.map(task => {
                            return <Task id={task.id} {...task} />
                        })

                        :

                        <></>
                    }




                    {/* Doing */}
                    <div className='flex flex-row items-center my-2' onClick={handleDoing}>
                        {/* Color Indicator */}
                        <div className='bg-doing w-[20px] h-[20px] border border-[0.2px] mr-2'>

                        </div>

                        {/* Stage Name */}
                        <p className='mx-2'> Doing { 0 ? [2] : '[0]'}<p>



                            </p>
                            
                        </p>


                        {/* Toggle Logo Depending on State */}

                        {
                            doing ?
                            
                            <KeyboardArrowDownIcon fontSize='large' />

                            :

                            <KeyboardArrowLeftIcon fontSize='large' />

                        }

                        
                    </div>

                    {/* Blocked */}
                    <div className='flex flex-row items-center my-2' onClick={handleBlocked}>
                        {/* Color Indicator */}
                        <div className='bg-blocked w-[20px] h-[20px] border border-[0.2px] mr-2'>

                        </div>

                        {/* Stage Name */}
                        <p className='mx-2'>Blocked { 0 ? [2] : '[0]'}</p>

                        {/* Toggle Logo Depending on State */}

                        {
                            blocked ?
                            
                            <KeyboardArrowDownIcon fontSize='large' />

                            :

                            <KeyboardArrowLeftIcon fontSize='large' />

                        }
                        
                    </div>

                    {/* Done */}
                    <div className='flex flex-row items-center my-2' onClick={handleDone}>
                        {/* Color Indicator */}
                        <div className='bg-done w-[20px] h-[20px] border border-[0.2px] mr-2'>

                        </div>

                        {/* Stage Name */}
                        <p className='mx-2'>Done { 0 ? [2] : '[0]'}</p>


                        {/* Toggle Logo Depending on State */}

                        {
                            done ?
                            
                            <KeyboardArrowDownIcon fontSize='large' />

                            :

                            <KeyboardArrowLeftIcon fontSize='large' />

                        }
                        
                    </div>
                
                </div>

            </div>
        
        
        </>
    )
}

export default Tasks