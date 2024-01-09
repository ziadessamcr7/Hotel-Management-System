import React from 'react'
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
    return (
        <div className='container-fluid'>
            <div className="d-flex">
                <div className="bg-darkBlue">
                    <SideBar />
                </div>
                <div className="w-100">
                    <div>
                        <div className='content-container ps-3'>
                            <Navbar />

                            <Outlet />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
