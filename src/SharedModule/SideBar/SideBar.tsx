import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link, useNavigate } from 'react-router-dom'
import ChangePassword from '../../AuthModule/Components/ChangePassword/ChangePassword'

export default function SideBar() {



    const [isCollapsed, setIsCollapsed] = useState(true)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);    // to open and close modal
    const handleShow = () => setShow(true);

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

    return (
        <div className='side-bar'>
            <Sidebar collapsed={isCollapsed}
                backgroundColor='blue'
                className='text-white vh-100'>
                <Menu className='' >

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body> <ChangePassword /> </Modal.Body>
                    </Modal>

                    <MenuItem onClick={handleToggle}
                        className='text-start' icon={<i className='fa fa-bars'>  </i>} >
                    </MenuItem>
                    <MenuItem title='home' icon={<i className="fa-solid fa-house"></i>}
                        component={<Link to="/home" />}> Home
                    </MenuItem>
                    <MenuItem title='recipes' icon={<i className="fa-solid fa-users"></i>}
                        component={<Link to="/home/users" />}>Users
                    </MenuItem>
                    <MenuItem title='favorites' icon={<i className="fa-brands fa-buysellads"></i>}
                        component={<Link to="/home/ads" />}>Ads
                    </MenuItem>
                    <MenuItem title='favorites' icon={<i className="fa-solid fa-calendar-days"></i>}
                        component={<Link to="/home/bookings" />}>Bookings
                    </MenuItem>
                    <MenuItem title='favorites' icon={<i className="fa-solid fa-person-shelter"></i>}
                        component={<Link to="/home/rooms" />}>Rooms
                    </MenuItem>
                    <MenuItem title='favorites' icon={<i className="fa-solid fa-person-shelter"></i>}
                        component={<Link to="/home/rooms" />}>Facilities
                    </MenuItem>
                    <MenuItem title='change passsword' icon={<i className="fa-solid fa-unlock"></i>}
                        onClick={handleShow}>Change Password
                    </MenuItem>
                    <MenuItem title='logout' icon={<i className="fa-solid fa-right-from-bracket"></i>} onClick={logout} >Logout</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}
