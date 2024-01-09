import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Context/AuthContext'

export default function ForgetPassword() {


    const nav = useNavigate()
    const [loading, setloading] = useState(false)

    const { baseUrl }: any = useContext(AuthContext)



    const {
        register,
        handleSubmit,
        formState: { errors }

    } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)

        setloading(true)

        axios.post(`${baseUrl}/portal/users/forgot-password`, data)
            .then(function (response) {
                toast.success(response.data.message)
                console.log(response);

                nav('/reset-pass')
            })
            .catch(function (error) {
                console.log(error.response.data.message);
                toast(error.response.data.message)
            })
    }


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <section>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item className='p-0' style={{ textAlign: 'left', boxShadow: 'none' }}>
                            <div className='bg-inf overflow-auto'>
                                <h4 className='ps-5 mt-3'> <span className='text-primary'>Stay</span>cation.</h4>
                                <form className='p-5 bg-dange w-75 m-auto' onSubmit={handleSubmit(onSubmit)}>
                                    <h2 className='mt-4'>Forget Password</h2>

                                    <label htmlFor="email" className='mt-4'>Email Address</label>
                                    <input type="email"
                                        className='form-control'
                                        placeholder='Please type here ...'
                                        {...register('email', {
                                            required: 'please enter your email',
                                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                                        })}
                                    />
                                    {errors.email && errors.email.type === 'required' &&
                                        (<span className='text-danger d-block'>Email is required</span>)}
                                    {errors.email && errors.email.type === 'pattern' && (<span className='text-danger'>Enter a valid email</span>)
                                    }



                                    <button className='btn btn-primary w-100 mt-5'>Send</button>
                                </form>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item className='p-0'>
                            <div className='forget-img position-relative'>
                                <div className='signIn-text'>
                                    <h2>Sign into roamhome</h2>
                                    <p>homes as unique as you</p>
                                </div>

                            </div>
                        </Item>
                    </Grid>

                </Grid>
            </Box>










        </section>
    )
}
