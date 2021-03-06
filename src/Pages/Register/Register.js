import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loding from '../Shared/Loading/Loding';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agrre, setAgrre] = useState(false)

    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })


    const [updateProfile, updating, profileError] = useUpdateProfile(auth)

    if (loading || updating) {
        return <Loding />
    }

    if (user) {
        console.log("user", user)
    }

    const handleRegisterSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        await createUserWithEmailAndPassword(email, password)

        await updateProfile({ displayName: name })
        alert('Updated profile')
        navigate('/')
    }
    return (
        <div className="container mx-auto p-5 register-form">
            <PageTitle title="signup" />
            <form onSubmit={handleRegisterSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name' /> <br /> <br />

                <input type="email" name="email" id="" placeholder='Email Address' required /> <br /> <br />

                <input type="password" name="password" id="" placeholder='Password' required /> <br /> <br />
                <input onClick={() => setAgrre(!agrre)} type="checkbox" name="terms" id="terms" />
                <level className={`${agrre ? '' : 'text-danger'}`} htmlFlor='terms'> Accept our terms and conditions </level> <br /> <br />
                <input disabled={!agrre} type="submit" value="Register" />  <br /> <br />
            </form>
            <p>Already you have account? <span className="text-primary" style={{ cursor: 'pointer' }} onClick={navigateToLogin}>Login</span> </p> <br /> <br />
            <SocialLogin />
        </div>
    );
};

export default Register;