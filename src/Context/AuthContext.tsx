import { jwtDecode } from 'jwt-decode'
import React, { createContext, useEffect, useState } from 'react'

export let AuthContext: any = createContext(null)

export default function AuthContextProvider({ children }: any) {


    const [userData, setUserData]: any = useState(null)



    let requestHeaders =
        { Authorization: `${localStorage.getItem('hmsUserToken')}` }

    let baseUrl = "http://154.41.228.234:3000/api/v0"


    useEffect(() => {
        if (localStorage.getItem('hmsUserToken')) {
            saveUserData()
        }
    }, [])


    const saveUserData = () => {
        const encodedToken: any = localStorage.getItem('hmsUserToken')
        const decodedToken = jwtDecode(encodedToken)
        console.log(decodedToken);
        setUserData(decodedToken)

    }


    return (
        <AuthContext.Provider value={{
            userData,
            saveUserData,
            requestHeaders,
            baseUrl
        }} >
            {children}
        </AuthContext.Provider>
    )
}
