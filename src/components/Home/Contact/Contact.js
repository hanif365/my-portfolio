import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container text-light py-5 text-center m-auto">
            <div className="row d-flex justify-content-center py-5">
                <div className="col-6 ">
                    <p className="text-colorful">What's Next?</p>
                    <h2>Get In Touch</h2>
                    <p>If you have any questions, please feel free to drop me a line. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                    <Link to="/contactForm" className="btn btn-colorful py-3 px-5 mt-5">Say Hello</Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;