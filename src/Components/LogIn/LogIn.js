import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "./LogIn.css"

const LogIn = () => {

    const eamilRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        const email = eamilRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <input ref={eamilRef} type="email" name="email" id="" required placeholder='Enter your email' />
                    </div>
                    <div className="input-group">
                        {/* <label htmlFor="password">Password</label> */}
                        <input ref={passwordRef} type="password" name="password" id="" required placeholder='Give your Password' />
                    </div>
                    {/* <p style={{ color: 'red' }}>{error?.message}</p> */}
                    <input className='form-submit' type="submit" value="Log in" />
                </form>
                <p>New in SunSet? <Link className='form-link' to='/signup'>Create An Account</Link></p>
            </div>
        </div>
    );
};

export default LogIn;