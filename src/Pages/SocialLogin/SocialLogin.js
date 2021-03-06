import React from 'react';
import icon1 from '../../images/socialLogin/googleIcon.jpg'
import icon2 from '../../images/socialLogin/gitHubIcon.png'
import icon3 from '../../images/socialLogin/facebookIcon.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loding from '../Shared/Loading/Loding';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth)
    const navigate = useNavigate()

    let errorElement

    if(loading || loading1){
        <Loding/>
    }


    if(user || user1){
        navigate('/')
    }

    if(error || error1){
        errorElement = <div>
        <p className="text-danger">Error: {error?.message} {error1?.message}</p>
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
                <button onClick={() => signInWithGithub()} type="button" className="btn btn-dark w-50 my-3 d-block mx-auto">
                    Login with github
                    <img style={{ width: '30px' }} className="img-fluid mx-4 bg-light rounded-circle" src={icon2} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;