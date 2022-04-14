import React from 'react';
import icon1 from '../../images/socialLogin/googleIcon.jpg'
import icon2 from '../../images/socialLogin/gitHubIcon.png'
import icon3 from '../../images/socialLogin/facebookIcon.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    let errorElement


    if(user){
        navigate('/')
    }

    if(error){
        errorElement = <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="bg-dark w-25"></div>
                <p className="mt-2 px-3">Or</p>
                <div style={{ height: '1px' }} className="bg-dark w-25"></div>
            </div>
            {errorElement}
            <div className="py-2">
                <button onClick={() => signInWithGoogle()} type="button" className="btn btn-light w-50 my-3 d-block mx-auto">
                    Login with google
                    <img style={{ width: '30px' }} className="img-fluid mx-4 rounded-circle" src={icon1} alt="" />
                </button> 
                <button type="button" className="btn btn-primary w-50 my-3 d-block mx-auto">
                    Login with facebook
                    <img style={{ width: '30px' }} className="img-fluid mx-4 bg-light rounded-circle bg-primary" src={icon3} alt="" />
                </button> 
                <button type="button" className="btn btn-dark w-50 my-3 d-block mx-auto">
                    Login with github
                    <img style={{ width: '30px' }} className="img-fluid mx-4 bg-light rounded-circle" src={icon2} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;