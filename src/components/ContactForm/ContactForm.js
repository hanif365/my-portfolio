import React from 'react';
import Navbar from '../Share/Navbar/Navbar';
import './ContactForm.css'
import emailjs from 'emailjs-com';
import contactImg from '../../Images/contact.jpg'

const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_owtc906', 'template_e4221gr', e.target, 'user_mDinwGeMWeuKeKDTS1CS8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="contact-form-container py-5 text-light">
            <Navbar></Navbar>
            <div className="bg bg1"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="container contact-form-content">
                <div className="row d-flex">
                    <div className="col-md-6 align-self-center">
                        <img src={contactImg} className="img-fluid" alt="contact-img" />
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h2>Get In Touch</h2>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="user_name" placeholder="Name" />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" name="user_email" placeholder="Email" />
                            </div>

                            <div class="mb-3">
                                <textarea class="form-control" name="message" placeholder="Message" rows="6"></textarea>
                            </div>

                            <input type="submit" value="Send" class="btn btn-contact w-100" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;