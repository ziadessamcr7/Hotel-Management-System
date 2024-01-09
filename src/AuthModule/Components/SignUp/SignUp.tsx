import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function SignUp() {


    const { baseUrl, saveUserData }: any = useContext(AuthContext)


    const nav = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch

    }: any = useForm()

    const password = watch('password')


    const RegisterForm = (data: any) => {
        console.log(data);
        axios.post(`${baseUrl}/portal/users`, data)
            .then((response) => {
                console.log(response);
                nav('/sign-in')
                saveUserData()
                toast.success('Signed-up successfully', {
                    autoClose: 2000
                })
            })
            .catch((error) => {
                console.log(error);
                toast.error('error happened', {
                    autoClose: 2000
                })
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
        <section className='' style={{ fontSize: '14px' }}>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Item className='p-0' style={{ textAlign: 'left', boxShadow: 'none' }}>
                            <div className='bg-inf overflow-auto'>
                                <h4 className='ps-5 mt-3'> <span className='text-primary'>Stay</span>cation.</h4>
                                <form className='px-5 pt-3 bg-dange w-75 m-auto' onSubmit={handleSubmit(RegisterForm)}>
                                    <h2 className=''>Sign up</h2>
                                    <p>If you don’t have an account register <br />
                                        you can <span className='fw-bold'>  </span>
                                    </p>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div>
                                                <label htmlFor="username">Username</label>
                                                <input type="text"
                                                    className='form-control w-100'
                                                    placeholder='Please type here ...'
                                                    {...register('userName', {
                                                        required: true,
                                                        pattern: /[a-z]/
                                                    })}
                                                />
                                                {errors.userName && errors.userName.type === 'required' &&
                                                    (<span className='text-danger d-block'> Username is required </span>)}
                                                {errors.userName && errors.userName.type === 'pattern' &&
                                                    (<span className='text-danger d-block'> Enter a valid username </span>)}

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div>
                                                <label>Img</label>
                                                <input type="file" className='form-control' />


                                            </div>
                                        </div>
                                    </div>



                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <div>
                                                <label htmlFor="phone">Phone Number</label>
                                                <input type="text"
                                                    className='form-control'
                                                    placeholder='Please type here ...'
                                                    {...register('phoneNumber', {
                                                        required: 'Phone is required',
                                                        pattern: /^01[0125][0-9]{8}$/gm
                                                    })}
                                                />
                                                {errors.phoneNumber &&
                                                    <span className='text-danger'> {errors.phoneNumber.message} </span>}
                                                {errors.phoneNumber && errors.phoneNumber.type == 'pattern' &&
                                                    <span className='text-danger'> enter a vlaid phoneNumber </span>}

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label htmlFor="country">Country</label>
                                                <input type="text"
                                                    className='form-control'
                                                    placeholder='Please type here ...'
                                                    {...register('country', {
                                                        required: 'country is required',
                                                        pattern: /[a-zA-Z]/
                                                    })}
                                                />
                                                {errors.country &&
                                                    <span className='text-danger'> {errors.country.message} </span>}
                                                {errors.country && errors.country.type == 'pattern' &&
                                                    <span className='text-danger'> enter a vlaid country </span>}

                                            </div>
                                        </div>
                                    </div>

                                    <label htmlFor="email" className='mt-2'>Email Address</label>
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

                                    <label htmlFor="password" className='mt-2'>Password</label>
                                    <input type="password"
                                        className='form-control'
                                        placeholder='Please type here ...'
                                        {...register('password', {
                                            required: true,
                                            pattern: /^[A-Za-z\d@$!%*#?&]{6,15}$/
                                        })}
                                    />
                                    {errors.password && errors.password.type === 'required' &&
                                        <span className='text-danger'>Password is required</span>}
                                    {errors.password && errors.password.type === 'pattern' &&
                                        <span className='text-danger'>Enter a valid password</span>}


                                    <label htmlFor="confirmPassword" className='mt-2 d-block'>Confirm Password</label>
                                    <input type="password"
                                        className='form-control'
                                        placeholder='Please type here ...'
                                        {...register('confirmPassword', {
                                            validate: (value: any) =>
                                                value === password || "The passwords do not match"
                                        })}
                                    />
                                    {errors.confirmPassword &&
                                        <span className='text-danger'> {errors.confirmPassword.message} </span>}




                                    <button className='btn btn-primary w-100 mt-1'>Register</button>
                                </form>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item className='p-0'>
                            <div className='register-img position-relative'>
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


