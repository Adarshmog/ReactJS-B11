import React from 'react';
import training from '../../Assets/training.jpg';
import './About.css';

const About = () => {
    return (
        <div className="container mt-5">
            <div className='text-left mb-4 about-title'>
                <h2 className='about'>ABOUT</h2>
                <p className='who-we-are'>WHO WE ARE</p>
            </div>

            <div className='row align-items-center mb-5'>
                <div className="col-md-6 mb-4 mb-md-0">
                    <img src={training} alt="Training session" className="img-fluid about-img" />
                </div>
                <div className='description col-md-6'>
                    <h3><font size='24'>A</font>n Year Experience</h3>
                    <p>We Started in 2021 December with just 8 students for a batch of Java training.</p>
                    <p>We started the training for DevOps as the next stream and followed by SAP, React and planning to extend the training to Quality Assurance, Data engineering, Data analytics and HR profiles.</p>
                    <button className='btn btn-outline-warning'>LEARN MORE</button>
                </div>
            </div>
        </div>
    );
}

export default About;

