import React, { useState } from 'react'
import Button from '../buttom/button.component';
import { FormInput } from '../form-input/form-input.component';
import { createAuthUserEmailPassword, createUserDocumentFromAuth } from '../../lib/firebase/firebase.lib';
import './signupform.style.scss'

export const SignUpForm = () => {

    const defaultformFields = {
        displayName: '',
        email: '',
        password: '',
        confirmpassword: '',
    }

    const [formFields, setformFields] = useState(defaultformFields);
    const { displayName, email, password, confirmpassword } = formFields;   //  Dentro del estado FormFields { displayName, email, password, confirmPassword }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformFields({ ...formFields, [name]: value })
    }

    const resetFormField = () => {
        setformFields(defaultformFields)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password != confirmpassword) {
            alert('password do not match')
            return;
        }

        try {
            const { user } = await createAuthUserEmailPassword(email, password)
            user.displayName = displayName;
            await createUserDocumentFromAuth(user)
            resetFormField()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot Creat User AlReady in Use')
            }
            console.log('Something Went Wrong', error);
        }
    }

    return (
        <div className='sign-up-container'>
            <h2> Dont have an account</h2>
            <span> Sign up with your email and password </span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Display Name'
                    inputOptions={{
                        type: 'text',
                        onChange: handleChange,
                        name: 'displayName',
                        value: displayName,
                        required: true
                    }}
                />
                <FormInput
                    label='Email'
                    inputOptions={{
                        type: 'email',
                        onChange: handleChange,
                        name: 'email',
                        value: email,
                        required: true
                    }}
                />
                <FormInput
                    label='Pasword'
                    inputOptions={{
                        type: 'password',
                        onChange: handleChange,
                        name: 'password',
                        value: password,
                        required: true
                    }}
                />
                <FormInput
                    label='Confirm Pasword'
                    inputOptions={{
                        type: 'password',
                        onChange: handleChange,
                        name: 'confirmpassword',
                        value: confirmpassword,
                        required: true
                    }}
                />
                <Button type='submit'> Sign Up </Button>
            </form>
        </div>
    )
}
