import React, { useEffect, useState } from 'react';
import './AllWorks.css'
import allWorksData from '../../data/data.json'
import AllWorksDetails from '../AllWorksDetails/AllWorksDetails';
import Navbar from '../Share/Navbar/Navbar';

const AllWorks = () => {
    const [allWorks, setAllWorks] = useState([]);
    const allWorksFilterData = allWorksData.slice(0,3);

    useEffect(() => {
        setAllWorks(allWorksFilterData);
    }, [])
    return (
        <div className="all-works-container">
            <Navbar></Navbar>
            <div className="bg bg1"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="container py-5 my-5">
                <h2 className="text-light">My Works</h2>
                <div className="d-flex flex-wrap justify-content-between pt-3">
                    {
                        allWorks.map(allwork => <AllWorksDetails allwork={allwork}></AllWorksDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllWorks;