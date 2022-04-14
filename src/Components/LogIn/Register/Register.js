import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        console.log(user);
        navigate('/');
    }



    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');

    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className='w-50 mx-auto'>
                <h2 className='text-primary text-center mt-4'>Please Register</h2>
                <Form className="mx-auto" onSubmit={handleRegister}>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicText">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label={<span className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} >Agree with terms and conditioins</span>} />
                    </Form.Group>
                    <Button disabled={!agree} variant="primary" type="submit" className='w-50 d-block mx-auto'>
                        Register
                    </Button>
                    <p className='text-center mt-2'>Already have an account? <Link className='form-link' to='/login'>Log in</Link></p>
                    <SocialLogIn></SocialLogIn>
                </Form>

            </div>
        </div>
    );
};

export default Register;