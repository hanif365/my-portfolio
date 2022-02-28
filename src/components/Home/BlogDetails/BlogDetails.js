import React, { useEffect } from 'react';
import './BlogDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const BlogDetails = (props) => {
    console.log(props);
    // const { id, title, description, image } = props.blog;
    const { id, title, description, image, date, tech1, tech2, tech3, tech4, link } = props.blog;

    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);

    const externalLink = () => {
        alert('Hello')
    }
    return (
        <div className="card blog-details-card mb-4" data-aos="zoom-in">
            <a href={link} className="blogLink" target="_blank">
                <div className="blog-card-imgBox">
                    <img src={image} class="card-img-top " alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <div className="d-flex flex-wrap technology">
                        <span>{tech1}</span>
                        {tech2 && <span>{tech2}</span>}
                        {tech3 && <span>{tech3}</span>}
                        {tech4 && <span>{tech4}</span>}

                    </div>
                    {/* <div className="pt-5 d-flex justify-content-around">
                        <a href={`https://${GithubLink}`} target="_blank" className="code-link"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href={`https://${LiveSiteLink}`} target="_blank" className="code-link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        <Link to="/allWorks" className="btn btn-colorful">Details</Link>
                    </div> */}

                </div>
            </a>
        </div>


    );
};

export default BlogDetails;