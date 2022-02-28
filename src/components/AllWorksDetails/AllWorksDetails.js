import React from 'react';
import './AllWorksDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


const AllWorksDetails = (props) => {
    const { id, title, description, image, GithubLink, LiveSiteLink, tech1, tech2, tech3, tech4, tech5, tech6, tech7 } = props.allwork;
    return (
        <div className="m-3 d-flex all-work-details-container flex-column flex-md-row row">
            <div className="col-md-7 align-self-center">
                <img src={image} className="img-fluid all-work-image-box" alt="works-image" />
            </div>
            <div className="col-md-5 align-self-center all-work-description-container rounded">
                <div className="work-description text-light">
                    <p>0{id}</p>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="d-flex flex-wrap technology">
                        <span>React.js</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>Stripe.js</span>
                        <span>BootStrap5</span>
                        <span>MongoDB</span>
                        <span>Firebase</span>
                    </div>
                    {/* <div className="pt-3">
                        <a href="#" className="code-link"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" className="code-link"><FontAwesomeIcon icon={faGithub} /></a>
                    </div> */}

                    <div className="pt-5 d-flex justify-content-evenly">
                        <a href={`https://${GithubLink}`} target="_blank" className="code-link"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href={`https://${LiveSiteLink}`} target="_blank" className="code-link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        {/* <Link to="/allWorks" className="btn btn-colorful">Details</Link> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllWorksDetails;