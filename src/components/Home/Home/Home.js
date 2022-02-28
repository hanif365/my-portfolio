import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Works from '../Works/Works';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Works></Works>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;