import React, { useEffect, useState } from 'react';
import Navbar from '../Share/Navbar/Navbar';
import './AllBlogs.css'
import allBlogsData from '../../data/blogData.json'
import AllBlogsDetails from '../AllBlogsDetails/AllBlogsDetails';

const AllBlogs = () => {
    // const { id, title, description, image, date,  tech1, tech2, tech3, tech4} = props.blog;
    const [allBlogs, setAllBlogs] = useState([]);
    const allBlogsFilterData = allBlogsData.slice(0, 6);

    useEffect(() => {
        setAllBlogs(allBlogsFilterData);
    }, [])
    return (
        <div className="all-works-container">
            <Navbar></Navbar>
            <div className="bg bg1"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="container py-5 my-5">
                <div className="row">
                    <h2 className="text-light">My Blogs</h2>
                    <div className="d-flex flex-wrap justify-content-between pt-3">
                        {
                            allBlogs.map(allBlog => <AllBlogsDetails key={allBlog.id} allBlog={allBlog}></AllBlogsDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;