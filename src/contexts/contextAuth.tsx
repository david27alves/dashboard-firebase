import React, { createContext, useState, useEffect } from "react"

import { app } from "../services/firebaseConfig"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

import { useSnackbar } from 'notistack'

export const ContextAuth = createContext<any>({})

interface User {
    providerId: string
}

function ContextAuthSignIn({ children }: {children: React.ReactNode}) {

    const { enqueueSnackbar } = useSnackbar();

    const auth = getAuth(app)
    const [user, setUser] = useState<User | null | string>(null)

    useEffect(() => {

        const loadStoreAuth = () => {

            const sessionUser = sessionStorage.getItem("@UserAuth")
            if (sessionUser) {
                setUser(sessionUser)
            }
        }

        loadStoreAuth()
        
    }, [])
    
        
    const handleSignIn = (email: string, pass: string) => {
        
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                setUser(userCredential.user)
                sessionStorage.setItem("@UserAuth", JSON.stringify(user))
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                enqueueSnackbar('Usuário ou senha inválido!', 
                { 
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    },
                    preventDuplicate: true
                })
            })
    }

    const handleSignOut = () => {
        sessionStorage.removeItem("@UserAuth")
        setUser(null)
    }

    return(
        <ContextAuth.Provider
            value={{
                handleSignIn,
                handleSignOut,
                logged: !!user
            }}
        >
            {children}
        </ContextAuth.Provider>
    )

}

export default ContextAuthSignIn