import { useState } from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link, useNavigate } from 'react-router-dom'
import ChangePassword from '../../AuthModule/Components/ChangePassword/ChangePassword'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function SideBar() {



    const [isCollapsed, setIsCollapsed] = useState(true)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed)   // sidebarCollapsing
    }

    const nav = useNavigate()

    function logout() {
        if (localStorage.getItem('hmsUserToken') !== null) {
            localStorage.removeItem('hmsUserToken')

            nav('/sign-in')
        }
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (


        <div className='side-bar'>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        change password
                    </Typography> */}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <ChangePassword handleClose={handleClose} />
                    </Typography>
                </Box>
            </Modal>

            <Sidebar collapsed={isCollapsed}
                backgroundColor='blue'
                className='text-white vh-100'>
                <Menu className='' >

                    <MenuItem onClick={handleToggle}
                        className='text-start' icon={<i className='fa fa-bars'>  </i>} >
                    </MenuItem>
                    <MenuItem title='home' icon={<i className="fa-solid fa-house"></i>}
                        component={<Link to="/home" />}> Home
                    </MenuItem>
                    <MenuItem title='users' icon={<i className="fa-solid fa-users"></i>}
                        component={<Link to="/home/users" />}>Users
                    </MenuItem>
                    <MenuItem title='ads' icon={<i className="fa-brands fa-buysellads"></i>}
                        component={<Link to="/home/ads" />}>Ads
                    </MenuItem>
                    <MenuItem title='bookings' icon={<i className="fa-solid fa-calendar-days"></i>}
                        component={<Link to="/home/bookings" />}>Bookings
                    </MenuItem>
                    <MenuItem title='rooms' icon={<i className="fa-solid fa-person-shelter"></i>}
                        component={<Link to="/home/rooms" />}>Rooms
                    </MenuItem>
                    <MenuItem title='facilities' icon={<i className="fa-solid fa-person-shelter"></i>}
                        component={<Link to="/home/facilities" />}>Facilities
                    </MenuItem>

                    <MenuItem title='change passsword' onClick={handleOpen} icon={<i className="fa-solid fa-unlock"></i>}
                    >Change Password
                    </MenuItem>


                    <MenuItem title='logout' icon={<i className="fa-solid fa-right-from-bracket"></i>} onClick={logout} >Logout</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}
