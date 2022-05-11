import React, { createContext, useEffect, useState } from 'react'
import { createUserDocumentFromAuth, onAuthStateChnagedListerK } from '../lib/firebase/firebase.lib';


//  as the Actuall Value you want to access
export const UserContext = createContext({
    CurrentUser: null,
    setCurrentUser: () => null

});

//  Initial Point
export const UserProvider = ({ children }) => {
    const [CurrentUser, setCurrentUser] = useState(null)
    const value = { CurrentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChnagedListerK((user) => {
            if ( user ){
                createUserDocumentFromAuth( user )
            }
            setCurrentUser(user)
        })
        return unsubscribe;
    }, [])


    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}