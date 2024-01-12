// Footer.js

import React from 'react';
import '../styles/Footer.css';
import logo from '../images/centurion1.jfif';

const Footer = () => {
  return (
    <div className='footer-main'>
        <footer className="footer">
            <div className="footer-content">
                <img src={logo} alt="Logo" className="footer-logo" />
                <div className="footer-text">
                    <p className='copyright'>© Copyright 2024 Centurion University</p>
                    <p className='design'>Designed & Developed By Debidutta Acharya</p>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
