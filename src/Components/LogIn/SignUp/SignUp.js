import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";
import auth from '../../../firebase.init';
import { Button } from 'react-bootstrap';
import SocialLogIn from '../SocialLogIn/SocialLogIn';



const SignUp = () => {
    const navigate = useNavigate();

    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate("/");
    }

    const handleSignUp = e => {
        e.preventDefault();
        const name = (e.target.name.value);
        const email = (e.target.email.value);
        const password = (e.target.password.value);
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    }
    return (
        <div className='container w-50 mx-auto sign-up-container'>
            <h2 className='text-primary text-center mt-4'>Please Sign Up</h2>
            <form className='mt-3' onSubmit={handleSignUp}>
                <input type="text" name="name" placeholder='Enter Your Name' />
                <input type="email" name="email" placeholder='Enter Email' id="" required />
                <input type="password" name="password" placeholder='Enter Password' id="" required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms">Agree with sunset Terms and Conditions  </label>
                <Button disabled={!agree} className='btn btn-primary w-50 d-block mx-auto fs-5 mb-2'>Sign Up</Button>
            </form>
            <p>Already have an account? <Link className='form-link' to='/login'>Log in</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default SignUp;