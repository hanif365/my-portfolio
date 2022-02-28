import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'
import blogsData from '../../../data/blogData.json'
import BlogDetails from '../BlogDetails/BlogDetails';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const blogsFilterData = blogsData.slice(0, 3);

    useEffect(() => {
        setBlogs(blogsFilterData);
    }, [])
    return (
        <div className="blogs-container">
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="">
                                <h2 className="py-3">My Latest Article</h2>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap justify-content-between pt-3">
                        {
                            blogs.map(blog => <BlogDetails key={blog.id} blog={blog}></BlogDetails>)
                        }
                    </div>

                    <div className="text-right d-flex justify-content-center py-3">
                        <Link to="/allBlogs">
                            <button className="btn btn-colorful py-2 px-5">Explore More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;