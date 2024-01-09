import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

export default function ProtectedRoute({ children }: any) {

    const { userData }: any = useContext(AuthContext)
    console.log(userData);


    if (userData == null && localStorage.getItem('hmsUserToken') == null) {
        return <Navigate to={'/sign-in'} />
    } else {
        return children
    }
}
