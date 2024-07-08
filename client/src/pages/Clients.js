import Client from '../components/Client'
import Project from '../components/Project'
import { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useFormik, Formik, Form, Field } from 'formik'
import { UserContext } from '../context/UserContext'
import CloseIcon from '@mui/icons-material/Close';
import { object, string, array, number, bool } from "yup";
import { useDropzone} from 'react-dropzone'
import UploadFileIcon from '@mui/icons-material/UploadFile';


function Clients() {
    const { user,updateUser } = useContext(UserContext)
    console.log(user)
    const [newClient, setNewClient] = useState(false)
    const [files, setFiles] = useState([]);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
          setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        }
      });

    const clients = user.user.account_details.clients.flatMap(client => {
        return <Client key={client.id} {...client}/>
    })



    const clientSchema = object({
        name: string()
        .required(),
        type: string(),
        isActive: bool(),
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


    const removeFile = (name) => {
        setFiles(files => files.filter(file => file.name !== name ))
      }


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
                    <Form 
                    className='bg-white border flex flex-col'
                    onSubmit={formik.handleSubmit}
                    initialValues={initialValues}
                    >
                        <label> New Client </label>
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
                            as='select'
                            placeholder='Active?'
                            className='border m-2 p-2'
                        >
                            <option value='true'>Yes</option>
                            <option value='false'>No</option>
                        </Field>

                        {formik.errors.isActive && formik.touched.isActive && (
                            <div className="text-sm text-ocean ml-2"> **{formik.errors.isActive.toUpperCase()}</div>
                        )}

                <div  {...getRootProps({className: 'dropzone'})}>
                  <input {...getInputProps()} />
                  <p className='bg-ocean border text-black m-2 p-2rounded-lg'>

                    <UploadFileIcon />
                    Drag or Click Here 
                    
                    </p>
                </div>

                  {files[0] ? 
                  <div className='flex flex-row justify-between bg-champagne p-2 m-2 rounded-lg '> 

                    <div clasName='flex flex-row'>
                      <img alt='img_preview' src={files[0].preview} className='h-[50px] w-[50px]' />

                      <div className='flex flex-col'> 

                        <p>{files[0].name}</p>
                        <p>{files[0].size}</p>
                        
                      </div>

                    </div>


                    <div className='flex flex-col'>

                      <button 
                        className='bg-shittake text-black rounded-lg p-1'
                        onClick={() => removeFile(files[0].name)}
                      >
                        Remove
                      </button>

                    </div>

                  </div>
                  : 
                  <h1>No file Uploaded</h1>}



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