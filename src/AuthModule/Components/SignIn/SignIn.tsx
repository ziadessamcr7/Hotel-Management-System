import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function SignIn() {



    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <section>

            <Box sx={{ flexGrow: 1 }}  >
                <Grid container spacing={1}>
                    <Grid item xs={6} padding={0} boxShadow={'none'}>
                        <Item className='p-0' style={{ textAlign: 'left', boxShadow: 'none' }}>
                            <div className='bg-inf mt-3'>
                                <h4 className='ps-5'> <span className='text-primary'>Stay</span>cation.</h4>
                                <form className='p-5 bg-dange w-75 m-auto' >
                                    <h2 className='mt-4'>Sign in</h2>
                                    <p>If you don’t have an account register <br />
                                        you can <span className='fw-bold'>   </span>
                                    </p>

                                    <label htmlFor="email" className='mt-4'>Email Address</label>
                                    <input type="email"
                                        className='form-control'
                                        placeholder='Please type here ...'
                                    />


                                    <label htmlFor="password" className='mt-4'>Password</label>
                                    <input type="password"
                                        className='form-control'
                                        placeholder='Please type here ...'
                                    />


                                    <button className='btn btn-primary w-100 mt-5'>Login</button>
                                </form>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} >
                        <Item className='p-0' >
                            <div className='signIn-img position-relative'>
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




