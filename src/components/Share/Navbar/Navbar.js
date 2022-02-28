import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top">
                <div class="container-fluid px-md-5">
                    <Link to="/" class="navbar-brand"><FontAwesomeIcon icon={faCode} /> M.A.Hanif</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link to="/home" class="nav-link active" aria-current="page">HOME</Link>
                            <Link to="/about" class="nav-link">ABOUT</Link>
                            <Link to="/allWorks" class="nav-link">WORKS</Link>
                            <Link to="/allBlogs" class="nav-link">BLOGS</Link>
                            <Link to="/contactForm" class="nav-link">CONTACT</Link>


                            {/* <a href="https://drive.google.com/uc?id=1io8ws0ZomXGJxek6iahKaWb79jBsw78s&export=download" target="_blank" className="btn btn-colorful py-2 px-3 nav-link">RESUME</a> */}

                            <a href="https://www.linkedin.com/in/programmerhanif/" target="_blank" className="btn btn-colorful py-2 px-4 nav-link">Hire Me</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;