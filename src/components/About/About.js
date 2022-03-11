import React from 'react';
import './About.css'
import aboutImg from '../../Images/hanifProfile.jpg'
import Navbar from '../Share/Navbar/Navbar';

const About = () => {
    return (
        <div className="aboutContainer">
            <Navbar></Navbar>
            <div className="bg bg1"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="py-5 my-5 container d-flex justify-content-between text-light">
                <div className="col-6 pe-3">
                    <img src={aboutImg} className="about-img img-fluid" alt="" />
                    <h5 className="text-colorful pt-5 pb-3">I'm</h5>
                    <h2>M.A.Hanif</h2>
                    <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                </div>
                <div className="col-6">
                    {/* <h5 className="text-colorful py-3">I'm</h5>
                    <h2>M.A.Hanif</h2>
                    <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p> */}
                    <h2 className="">My Skills Set</h2>
                    <div className="d-flex flex-wrap technology">
                        <span>React.js</span>
                        <span>ES6</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>Stripe.js</span>
                        <span>React-BootStrap</span>
                        <span>BootStrap5</span>
                        <span>MongoDB</span>
                        <span>Firebase</span>
                        <span>Netlify</span>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;