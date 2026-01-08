import React, { createContext, useEffect, useState } from 'react'

export const authContext = createContext()


function AuthContext({ children }) {

    const [role, setRole] = useState("")
    const [authorizedUser, setAuthorizedUser] = useState(false)


    useEffect(() => {
        // 
        console.log("AUTH CHECK RUNNING")

        const admin = JSON.parse(sessionStorage.getItem("existingAdmin"))
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        const Organization = JSON.parse(sessionStorage.getItem("existingOrganization"))
        const token = sessionStorage.getItem("token")

        console.log({ admin, user, Organization, token })

        // setRole(user?.role)
        // setAuthorizedUser(true)
        if (token && (admin || user || Organization)) {
            const currentLogin = admin ? admin.role : user ? user.role : Organization.role

            // 
            console.log("AUTH SUCCESS:", currentLogin)
            setRole(currentLogin)
            setAuthorizedUser(true)
        } else {
            setRole("")
            setAuthorizedUser(false)
        }

    }, [role, authorizedUser])

    return (
        <>
            <authContext.Provider value={{ role, authorizedUser, setAuthorizedUser }}>
                {children}
            </authContext.Provider>
        </>
    )
}

export default AuthContext