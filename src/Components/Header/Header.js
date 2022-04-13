import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../Images/logo.png";
import "./Header.css";

const Header = () => {
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
                    <NavLink className='navlink' to={"login"}>Login</NavLink>
                </div>


            </Container>
        </Navbar>
    );
};

export default Header;