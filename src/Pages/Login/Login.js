import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

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

    const location = useLocation()
    const from = location.state?.from?.pathname || "/"


    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
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
            <p className="mt-2">Are you new here? <span className="text-danger" style={{ cursor: 'pointer' }} onClick={navigateToRegister}>Register</span> </p>
            <SocialLogin />
        </div>
    );
};

export default Login;