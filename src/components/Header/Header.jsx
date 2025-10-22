import React, { useState } from 'react';
import image from '../../Assets/logo-removebg-preview.png';
import './Header.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [hideHero, setHideHero] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setHideHero(!hideHero);
    };

    return (
        <div className={`header home ${showMenu ? 'show-menu' : ''}`}>
            <div className="container-fluid">
                <div className="header-top row align-items-center">
                    <div className="col-lg-3">
                        <div className="brand">
                            <a href="index.html">
                                <img src={image} alt="Logo" className="logo-img" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="topbar">
                            <div className="topbar-col">
                                <a href="tel:+91 76192 21922">
                                    <i className="fa fa-phone" aria-hidden="true"></i>+91 76192 21922
                                </a>
                            </div>
                            <div className="topbar-col">
                                <a href="mailto:admin@amigosbusinesscorp.com">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>admin@amigosbusinesscorp.com
                                </a>
                            </div>
                        </div>
                        <div className="navbar navbar-expand-lg bg-light navbar-light">
                            <a href="/#" className="navbar-brand">MENU</a>
                            <button type="button" className="navbar-toggler" onClick={toggleMenu} aria-expanded={showMenu}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarCollapse">
                                <div className="navbar-nav ml-auto style={{ justifyContent: 'flex-end' }}">
                                    <a href="index.html" className="nav-item nav-link">Home</a>
                                    <a href="about.html" className="nav-item nav-link">About</a>
                                    <a href="#services" className="nav-item nav-link">Service</a>
                                    <a href="story.html" className="nav-item nav-link">Story</a>
                                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`hero row align-items-center ${hideHero ? 'hide' : 'show'}`}>
                    <div className="mt-5 col-md-7">
                        <h2><span>Training</span></h2>
                        <p>We provide Training and Placement</p>
                        <a className="btn" href="service.html">Explore Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

