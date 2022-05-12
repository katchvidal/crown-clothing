import React, { useState, useContext } from 'react'
import Button from '../buttom/button.component';
import { FormInput } from '../form-input/form-input.component';
import { createUserDocumentFromAuth, signInWithEmailAndPasswordK, signInWithGooglePopup } from '../../lib/firebase/firebase.lib';
import './sign-in-form.style.scss'
import { useNavigate } from 'react-router-dom';



const defaultformFields = {
    email: '',
    password: ''
}

export const SignInForm = () => {
    const navigate = useNavigate()
    const [formFields, setformFields] = useState(defaultformFields);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformFields({ ...formFields, [name]: value })
    }
    const { email, password } = formFields;   //  Dentro del estado FormFields {  email, password }
    const resetFormField = () => {
        setformFields(defaultformFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { user } = await signInWithEmailAndPasswordK(email, password)        
            resetFormField()
            navigate('/')
        } catch (error) {
            switch( error.code ){
                case 'auth/user-not-found':
                    alert('Email Not Exist Please Sign Up');
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect Email/Password')
                    break;
                default:
                    break;
                
            }
        }
    }

    //  Funcionalidad para Authenticar usuario con Google Pop Up 
    const logGoogleUser = async () => {
        await signInWithGooglePopup();
       
    }

    return (
        <div className='sign-in-container'>
            <h2> Already Have an Account </h2>
            <span> Sing in with your email and password  </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    inputOptions={{
                        type: 'text',
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
                <div className='buttons-container'>

                    <Button type='submit'> Sign In </Button>

                    <Button type='button' buttonType='google' onClick={logGoogleUser}> <i className="fa fa-google"></i> Google Sign In </Button>
                </div>

            </form>

        </div>
    )
}
