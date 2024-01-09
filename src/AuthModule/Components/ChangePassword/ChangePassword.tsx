import React, { useContext, useRef, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../Context/AuthContext'


export default function ChangePassword({ handleClose }: any) {

    const [loading, setLoading] = useState(false)

    const { baseUrl, requestHeaders }: any = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    }: any = useForm({ mode: 'onTouched' })

    const password = watch("newPassword")


    const formSubmit = (data: any) => {
        setLoading(true)
        axios.post(`${baseUrl}/admin/users/change-password`, data, {
            headers: requestHeaders
        }).then((response) => {
            console.log(response)
            toast.success(response.data.message, {
                autoClose: 2000
            })
            setLoading(false)
            handleClose()

        }).catch((error) => {
            console.log(error)
            toast.error(error.response.data.message, {
                autoClose: 2000
            })
            setLoading(false)
        })
    }



    return (<>
        <div className="">
            <div>
                <div className='text-center'>
                    {/* <img src={myImg} className='w-50' alt="logo" /> */}
                </div>
                <h3>Change Your Password</h3>
                <p className='text-muted mb-4'>Enter Your Details Below</p>

                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className='bg-ino box d-flex align-items-center mt-4 p1 rounded-2' >
                        <div className='icon p-2'>
                            <i className="fa fa-lock bg-dange"></i>
                        </div>
                        <input type="password"
                            id="oldPassword"
                            className='form-control'
                            placeholder='Old Password'
                            {...register('oldPassword', {
                                required: 'must enter password',
                                minLength: {
                                    value: 8,
                                    message: 'enetr 8 chars'
                                }
                            })}
                        />
                    </div>
                    {/* {errors.oldPassword && errors.oldPassword.type == 'required' &&
                    <span className='text-danger'> old password required</span>}
                {errors.oldPassword && errors.oldPassword.type == 'pattern' &&
                    <span className='text-danger'>invalid pass</span>} */}
                    {errors.oldPassword && <span className='text-danger'>{errors.oldPassword.message}</span>}


                    <div className='bg-ino box d-flex align-items-center mt-4 p1 rounded-2'>
                        <div className='icon p-2'>
                            <i className="fa fa-lock bg-dange"></i>
                        </div>
                        <input type="password"
                            id="newPassword"
                            className='form-control'
                            placeholder='New Password'
                            // {...register('newPassword', {
                            //     required: true,
                            //     pattern: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
                            // })}
                            {...register('newPassword', {
                                required: 'must enter new password',
                                minLength: {
                                    value: 8,
                                    message: 'enetr 8 chars'
                                }
                            })}
                        />
                    </div>
                    {/* {errors.newPassword && errors.newPassword.type == 'required' &&
                    <span className='text-danger'>new password required</span>}
                {errors.newPassword && errors.newPassword.type == 'pattern' &&
                    <span className='text-danger'>invalid password</span>} */}
                    {errors.newPassword && <span className='text-danger'>{errors.newPassword.message}</span>}



                    <div className='bg-ino box d-flex align-items-center mt-4 p1 rounded-2'>
                        <div className='icon p-2'>
                            <i className="fa fa-lock bg-dange"></i>
                        </div>

                        <input type="password"
                            id="confirmNewPassword"
                            className='form-control'
                            placeholder='Confirm New Password'
                            // {...register('confirmNewPassword', {
                            //     required: true,
                            // })}
                            {...register('confirmNewPassword', {
                                required: 'must confirm new password',
                                validate: (value: any) =>
                                    value === password || "The passwords do not match"
                            })}
                        />
                    </div>
                    {/* {errors.confirmNewPassword && errors.confirmNewPassword.type == 'required' &&
                    <span className='text-danger'>new password required</span>} */}
                    {errors.confirmNewPassword && <span className='text-danger'>{errors.confirmNewPassword.message}</span>}







                    <button className='btn btn-primary w-100 fw-bold  mt-4'>
                        {loading ? <i className='fa-spin fa-spinner fa-solid'></i> : 'Change Password'}
                    </button>
                </form>
            </div>
        </div>
    </>

    )

}





