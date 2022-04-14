import React from 'react';
import { Button } from 'react-bootstrap';
import google from "../../../Images/google.png";
import github from "../../../Images/github.png";
import facebook from "../../../Images/facebook.png";
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <p>Error: {error.message}</p>;
    }

    if (user) {
        navigate("/");
    }
    return (
        <div >
            <div className='d-flex align-items-center'>
                <div className="bg-primary w-50" style={{ height: 2 }}></div>
                <div>OR</div>
                <div className="bg-primary w-50" style={{ height: 2 }}></div>
            </div>
            {errorElement}
            <Button
                onClick={() => signInWithGoogle()}
                className='btn btn-warning w-50 d-block mx-auto my-2'>
                <img src={google} style={{ width: 25 }} className='me-3' alt="" />
                Google Sign In</Button>
            <Button className='btn btn-warning w-50 d-block mx-auto my-2'>
                <img src={github} style={{ width: 25 }} className='me-3' alt="" />
                Github Sign In</Button>
            <Button className='btn btn-warning w-50 d-block mx-auto my-2'>
                <img src={facebook} style={{ width: 35 }} className='me-3' alt="" />
                Facebook Sign In</Button>
        </div>
    );
};

export default SocialLogIn;