import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";
import auth from '../../../firebase.init';
import { Button } from 'react-bootstrap';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import Loading from '../Loading/Loading';



const SignUp = () => {
    const navigate = useNavigate();

    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (loading) {
        return <Loading></Loading>;
    }

    if (user) {
        console.log('user', user);
        navigate("/");
    }

    const handleSignUp = (e) => {
        // e.preventDefault();
        const name = (e.target.name.value);
        console.log(name);
        const email = (e.target.email.value);
        console.log(email);
        const password = (e.target.password.value);
        createUserWithEmailAndPassword(email, password);
        // await updateProfile({ displayName: name });
        // alert('Updated profile');

    }
    return (
        <div className='container w-50 mx-auto sign-up-container'>
            <h2 className='text-primary text-center mt-4'>Please Sign Up</h2>
            <form className='mt-3'>
                <input type="text" name="name" placeholder='Enter Your Name' />
                <input type="email" name="email" placeholder='Enter Email' id="" required />
                <input type="password" name="password" placeholder='Enter Password' id="" required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms">Agree with sunset Terms and Conditions  </label>

            </form>
            <Button disabled={!agree} className='btn btn-primary w-50 d-block mx-auto fs-5 my-2' onClick={handleSignUp}>Sign Up</Button>
            <p>Already have an account? <Link className='form-link' to='/login'>Log in</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default SignUp;