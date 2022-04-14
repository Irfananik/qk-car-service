import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="bg-dark w-25"></div>
                <p className="mt-2 px-3">Or</p>
                <div style={{ height: '1px' }} className="bg-dark w-25"></div>
            </div>
            <div className="py-2">
                <button type="button" className="btn btn-light w-50 my-2">Login with google</button> <br />
                <button type="button" className="btn btn-primary w-50 my-2">Login with facebook</button> <br />
                <button type="button" className="btn btn-dark w-50 my-2">Login with github</button>
            </div>
        </div>
    );
};

export default SocialLogin;