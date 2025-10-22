import React from 'react';
import { Link } from 'react-router-dom';
import user_icon from '../../Assets/person.png';
import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';
import './LoginSignup.css';

const LoginSignup = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>

                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className='submit-container'>
                <div><Link className='submit' to='/team'>Log In</Link></div>
            </div>
        </div>
    )
}

export default LoginSignup;
