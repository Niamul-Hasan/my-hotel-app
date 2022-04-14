import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from "../../Images/logo.png";
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar bg="dark" sticky='top' variant="dark">
            <Container className='nav-container'>
                <div>
                    <Navbar.Brand as={Link} to="/#home">
                        <img src={logo} className="w-50 h-25" alt="" />
                    </Navbar.Brand>
                </div>
                <div>
                    <NavLink className="navlink" to={'/'}>Home</NavLink>
                    <NavLink className="navlink" to={"booking"}>Booking</NavLink>
                    {
                        user ? <Button onClick={handleSignOut} className="text-decoration-none fs-5 text-white" variant="link">SignOut</Button> : <NavLink className='navlink' to={"login"}>Login</NavLink>}
                </div>


            </Container>
        </Navbar>
    );
};

export default Header;