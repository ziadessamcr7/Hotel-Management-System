import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function SignUp() {

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
                                <form className='px-5 pt-3 bg-dange w-75 m-auto' >
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
                                                />

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
                                                />

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label htmlFor="country">Country</label>
                                                <input type="text"
                                                    className='form-control'
                                                    placeholder='Please type here ...'
                                                />

                                            </div>
                                        </div>
                                    </div>

                                    <label htmlFor="email" className='mt-2'>Email Address</label>
                                    <input type="email"
                                        className='form-control'
                                        placeholder='Please type here ...'
                                    />

                                    <label htmlFor="password" className='mt-2'>Password</label>
                                    <input type="password"
                                        className='form-control'
                                        placeholder='Please type here ...'
                                    />


                                    <label htmlFor="confirmPassword" className='mt-2 d-block'>Confirm Password</label>
                                    <input type="password"
                                        className='form-control'
                                        placeholder='Please type here ...'
                                    />




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


