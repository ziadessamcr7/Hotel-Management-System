import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function ResetPassword() {

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


                            <form className='p-5 bg-dange w-75 m-auto' >
                                <h3>Reset Password</h3>
                                <p className='text-muted'>Please Check Your Inbox And Enter Your OTP</p>

                                <input type="email"
                                    placeholder='E-mail'
                                    className='form-control mx-auto mt-3'
                                />


                                <input type="text"
                                    id='otp'
                                    placeholder='OTP'
                                    className='form-control mx-auto mt-3'

                                />


                                <input type="password"
                                    placeholder='New Password'
                                    className='form-control mx-auto mt-3'
                                />

                                <input type="password"
                                    placeholder='Confirm New Password'
                                    className='form-control mx-auto mt-3'
                                />


                                <button className='btn btn-primary w-100 mt-4 fw-bolder'>
                                    Reset Password

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


