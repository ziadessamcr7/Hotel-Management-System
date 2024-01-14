import { useContext, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthContext from './Context/AuthContext'
import AuthLayout from './SharedModule/AuthLayout/AuthLayout'
import NotFound from './SharedModule/NotFound/NotFound'
import SignIn from './AuthModule/Components/SignIn/SignIn'
import ForgetPassword from './AuthModule/Components/ForgetPassword/ForgetPassword'
import ResetPassword from './AuthModule/Components/ResetPassword/ResetPassword'
import SignUp from './AuthModule/Components/SignUp/SignUp'
import Home from './HomeModule/Home'
import ProtectedRoute from './SharedModule/ProtectedRoute/ProtectedRoute'
import MasterLayout from './SharedModule/MasterLayout/MasterLayout'
import Bookings from './BookingsModule/Bookings'
import Ads from './AdsModule/Ads'
import Users from './UsersModule/Users'
import Rooms from './RoomsModule/Rooms'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Facilities from './Facilities/Facilities'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <SignIn /> },
      { path: 'sign-in', element: <SignIn /> },
      { path: 'forget-pass', element: <ForgetPassword /> },
      { path: 'reset-pass', element: <ResetPassword /> },
      { path: 'sign-up', element: <SignUp /> },
    ]
  },
  {
    path: 'home',
    element: <ProtectedRoute>
      <MasterLayout />
    </ProtectedRoute>,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'bookings', element: <Bookings /> },
      { path: 'ads', element: <Ads /> },
      { path: 'users', element: <Users /> },
      { path: 'rooms', element: <Rooms /> },
      { path: 'facilities', element: <Facilities /> },
    ]

  }
])

function App() {


  return (

    <>
      <ToastContainer />
      <RouterProvider router={routes}>
      </RouterProvider>
    </>

  )
}

export default App
