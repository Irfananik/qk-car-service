import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      if(user){
          navigate('/')
      }

    const handleRegisterSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className="container w-50 mx-auto p-5 register-form">
            <form onSubmit={handleRegisterSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name' /> <br /> <br />

                <input type="email" name="email" id="" placeholder='Email Address' required /> <br /> <br />

                <input type="password" name="password" id="" placeholder='Password' required /> <br /> <br />
                <input type="submit" value="Register" />  <br /> <br />
            </form>
            <p>Already you have account? <span className="text-danger" style={{ cursor: 'pointer' }} onClick={navigateToLogin}>Login</span> </p> <br /> <br />
        </div>
    );
};

export default Register;