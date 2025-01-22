import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../CSS/Navbar.css';

const Navbar = () => {
    const styling = {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px',
       
    };

    return (
        <header>
            <nav>
                <ol style={styling}>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                    <li><Link to="/sign-up" className='link'>Signup</Link></li>
                    <li><Link to="/login" className='link'>Login</Link></li>
                </ol>
            </nav>
        </header>
    );
};

export default Navbar;
