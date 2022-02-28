import React, { useEffect } from 'react';
import './WorkDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const WorkDetails = (props) => {
    console.log(props);
    // const { id, title, description, image } = props.work;
    const { id, title, description, image, GithubLink, LiveSiteLink, tech1, tech2, tech3, tech4, tech5, tech6, tech7 } = props.work;

    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);
    return (
        <>
            {/* <div className="bg bg1"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div> */}
            <div class="card work-details-card mb-4" data-aos="fade-up">
                <div className="work-card-imgBox">
                    <img src={image} class="card-img-top " alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <div className="d-flex flex-wrap technology">
                        <span>{tech1}</span>
                        <span>{tech2}</span>
                        <span>{tech3}</span>
                        {tech4 && <span>{tech4}</span>}
                        {tech5 && <span>{tech5}</span>}
                        {tech6 && <span>{tech6}</span>}
                        {tech7 && <span>{tech7}</span>}

                    </div>
                    <div className="pt-5 d-flex justify-content-around">
                        <a href={`https://${GithubLink}`} target="_blank" className="code-link"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href={`https://${LiveSiteLink}`} target="_blank" className="code-link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        <Link to="/allWorks" className="btn btn-colorful">Details</Link>
                    </div>

                </div>
            </div>


        </>
    );
};

export default WorkDetails;