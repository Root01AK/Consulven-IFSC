import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {assets} from "../assets/assets.js"



const JobCard = ({ job }) => {
    return (

        <div className="jobCard">
            <div className='jobCardTop'>
                <h1>{job.title}</h1>
                <p>{job.latest}</p>
            </div>
            <div className="jobTopSection">
                <p>{job.workType}</p>
                <p>EXPERIENCE &nbsp; {job.experience}</p>
            </div>
            <div className="jobMiddleSection">
                <img src={assets.hiringBlack_icon} alt="" />
                <div className="jobLocationDetails">
                    <p>Location</p>
                    <div> 
                        <img src={assets.locationBlack_icon} alt="" className="location" />
                        <p>{job.location}</p>
                    </div> 
                </div>
            </div>
            <Link to={`/career/${job.id}`} className='JobBtn'>
                <button>
                    <span>Apply Now</span>
                    <img src={assets.arrowWhite} alt="" className='icon' />
                </button>
            </Link>

        </div>
  )
}

export default JobCard

