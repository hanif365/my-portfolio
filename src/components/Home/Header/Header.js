import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import HeaderContent from '../HeaderContent/HeaderContent';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;