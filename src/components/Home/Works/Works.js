import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import worksData from '../../../data/data.json'
import WorkDetails from '../WorkDetails/WorkDetails';
import './works.css'

const Works = () => {
    const [works, setWorks] = useState([]);
    const worksFilterData = worksData.slice(0, 3)

    useEffect(() => {
        setWorks(worksFilterData);
        // console.log(worksFilterData);
    }, [])
    return (
        <div className="works-container">
            <div className="container py-5">
                <div className="row">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="">
                                <h2 className="py-3">My Latest Works</h2>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap justify-content-between pt-3">
                        {
                            works.map(work => <WorkDetails key={work.id} work={work}></WorkDetails>)
                        }
                    </div>

                    <div className="text-right d-flex justify-content-center py-3">
                        <Link to="/allWorks" className="btn btn-colorful py-2 px-5">Explore More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;