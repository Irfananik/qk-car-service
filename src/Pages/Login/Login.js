import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loding from '../Shared/Loading/Loding';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const navigate = useNavigate()

    let errorElement

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth)

    const location = useLocation()
    const from = location.state?.from?.pathname || "/"


    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }

    if (loading || sending) {
        return <Loding />
    }


    if (user) {
        navigate(from, { replace: true })
    }

    if (error) {
        errorElement =
            <p className="text-danger">Error: {error?.message}</p>
    }

    const navigateToRegister = () => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email)
        alert('Sent email')
    }

    return (
        <div className="container  mx-auto p-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className="mt-2">{errorElement}</p>
            </Form>
            <p className="mt-2">Are you new here? <span className="text-primary" style={{ cursor: 'pointer' }} onClick={navigateToRegister}>Register</span> </p>
            <p className="mt-2">Reset Password? <span className="text-primary" style={{ cursor: 'pointer' }} onClick={resetPassword}>Rset Password</span> </p>
            <SocialLogin />
        </div>
    );
};

export default Login;