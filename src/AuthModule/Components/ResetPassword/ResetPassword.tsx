import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AuthContext } from '../../../Context/AuthContext'

export default function ResetPassword() {

    const [loading, setLoading] = useState(false)

    const { baseUrl }: any = useContext(AuthContext)


    const {
        register,
        handleSubmit,
        formState: { errors },
        watch

    }: any = useForm()

    const nav = useNavigate()

    const password = watch("password")


    const onSubmit = (data: any) => {
        console.log(data)
        setLoading(true)
        axios.post(`${baseUrl}/admin/users/reset-password`, data)
            .then(function (response) {
                toast.success(response.data.message)
                console.log(response);
                setTimeout(() => {
                    nav('/food-app-user')
                }, 4000);
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error.response.data.message);
                toast(error.response.data.message)
                setLoading(false)
            })
    }


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return <>

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Item className='p-0' style={{ textAlign: 'left', boxShadow: 'none' }}>

                        <div className='bg-white rounded-3'>
                            <h4 className='bg-succe ps-5 mt-3'> <span className='text-primary'>Stay</span>cation.</h4>


                            <form className='p-5 bg-dange w-75 m-auto' onSubmit={handleSubmit(onSubmit)} >
                                <h3>Reset Password</h3>
                                <p className='text-muted'>Please Check Your Inbox And Enter Your OTP</p>

                                <input type="email"
                                    placeholder='E-mail'
                                    className='form-control mx-auto mt-3'
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                                    })}
                                />
                                {errors.email && errors.email.type === 'required' &&
                                    <span className='text-danger'>Email is required</span>}
                                {errors.email && errors.email.type === 'pattern' &&
                                    <span className='text-danger'>Enter a valid email</span>}


                                <input type="text"
                                    id='otp'
                                    placeholder='OTP'
                                    className='form-control mx-auto mt-3'
                                    {...register('seed', {
                                        required: true,
                                    })}
                                />
                                {errors.seed && <span className='text-danger' >OTP is required</span>}


                                <input type="password"
                                    placeholder='New Password'
                                    className='form-control mx-auto mt-3'
                                    {...register('password', {
                                        required: "password required",
                                        pattern: /^[A-Za-z\d@$!%*#?&]{6,15}$/
                                    })}
                                />
                                {errors.password &&
                                    <span className='text-danger'> {errors.password.message} </span>}
                                {errors.password && errors.password.type == 'pattern' &&
                                    <span className='text-danger'> enter a vlaid password </span>}

                                <input type="password"
                                    placeholder='Confirm New Password'
                                    className='form-control mx-auto mt-3'
                                    {...register('confirmPassword', {
                                        required: true,
                                        validate: (value: any) =>
                                            value === password || "The passwords do not match"
                                    })}
                                />
                                {errors.confirmPassword && <span className='text-danger'> {errors.confirmPassword.message} </span>}


                                <button className='btn btn-primary w-100 mt-4 fw-bolder'>
                                    {loading ? <i className='fa-solid fa-spin fa-spinner'></i> : 'Reset Password'}
                                </button>

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









    </>
}


