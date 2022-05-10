import React, { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
    auth,
    createUserDocumentFromAuth,
} from '../../lib/firebase/firebase.lib'
import { SignUpForm } from '../../components/sign-up-form/sing-up-form.component'
import { SignInForm } from '../../components/sign-in-form/sing-in-form.component'
import './auth.style.scss'

const Authentication = () => {

    useEffect(() => {
        (async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)

            }
        })()
    }, [])

    return (
        <>
            <div className='authentication-container'>
                <SignInForm />
                <SignUpForm />
                <br />
            </div>
        </>
    )
}

export default Authentication;