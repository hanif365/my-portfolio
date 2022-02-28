import React, { useEffect } from 'react';
import './AllBlogsDetails.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllBlogsDetails = (props) => {
    const { id, title, description, image, date, tech1, tech2, tech3, tech4, link } = props.allBlog;

    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);
    return (
        <div class="card blog-details-card mb-4" data-aos="fade-down">
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
                </div>
            </a>
        </div>
    );
};

export default AllBlogsDetails;