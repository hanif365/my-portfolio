import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="bg-colorful footer-container py-3 ">
            <ul className="d-flex justify-content-center list-unstyled">
                <a href="https://github.com/hanif365" target="_blank" className="fa-link me-3"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/programmerhanif/" className="me-3 fa-link" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.facebook.com/M.A.HanifKhaan/" target="_blank" className="fa-link me-3"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/abuhanif.cse3/" className="fa-link me-3" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </ul>
            <div className=" d-flex justify-content-center  text-light">
                &copy;{new Date().getFullYear()} <span className="text-me mx-2"> M.A.Hanif khan </span> - All Rights reserved.
            </div>

            <div>
                <a href="#" className="bottom-to-top"><FontAwesomeIcon icon={faArrowUp} size="2x" /></a>
            </div>
        </div>
    );
};

export default Footer;