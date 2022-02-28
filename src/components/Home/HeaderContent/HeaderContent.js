import React, { useEffect } from 'react';
import './HeaderContent.css'
import headerImg from '../../../Images/hanif.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import movingHand from '../../../Images/moving-hand.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';



const HeaderContent = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, offset: 400 });
    }, []);
    return (
        <main className="header-content row d-flex justify-content-between">
            <div className="col-md-5 offset-md-1 align-self-center header-content-first" data-aos="fade-down">
                <p className="text-colorful">Hello, I'm</p>

                <h1 className="text-light">
                    Md. Abu Hanif
                    {/* <a href="https://www.animatedimages.org/cat-hands-81.htm"><img src="https://www.animatedimages.org/data/media/81/animated-hand-image-0044.gif" border="0" alt="animated-hand-image-0044" /></a> */}
                    <img src={movingHand} className="moving-hand" alt="" />
                </h1>

                {/* <ul className="text-colorful d-flex ps-3">
                    <li className="me-5">Web Developer</li>
                    <li>Competitive Programmer</li>
                </ul> */}
                <div className="d-flex type-writer">
                    <p className="me-2">I am a </p>
                    <div className="typewriter-text">
                        <Typewriter
                            options={{
                                strings: ['MERN Stack Web Developer', 'Competitive Programmer', 'JavaScript Lover'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                {/* <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Hello World!')
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                    }}
                /> */}

                {/* <Typewriter
                    options={{
                        strings: ['Hello', 'World'],
                        autoStart: true,
                        loop: true,
                    }}
                /> */}

                <h6 className="text-light  font-monospace pb-3">An enthusiastic and creative web developer with a productive idea of problem-solving and always like to keep myself updated with modern technology.</h6>

                <ul className="d-flex justify-content-start list-unstyled">
                    <a href="https://github.com/hanif365" target="_blank" className="fa-link me-3"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/programmerhanif/" className="me-3 fa-link" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.facebook.com/M.A.HanifKhaan/" target="_blank" className="fa-link me-3"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.instagram.com/abuhanif.cse3/" className="fa-link me-3" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                </ul>

                <Link to="/about">
                    <button className="btn btn-colorful me-4 py-2">About Me</button>
                </Link>
                {/* <a href="#">
                    <button className="btn btn-colorful text-light py-2">Get In Touch</button>
                </a> */}
                <a href="https://drive.google.com/uc?id=1io8ws0ZomXGJxek6iahKaWb79jBsw78s&export=download" target="_blank" className="btn btn-colorful py-2 px-5 my-2">Download Resume</a>
            </div>
            <div className="col-md-5 header-img-container object mt-3" data-aos="fade-left">
                <div className="box box2">

                </div>
            </div>

        </main>
    );
};

export default HeaderContent;