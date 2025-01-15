import React from 'react'
import { Link } from "react-router-dom";

const SimilarJobCard = ({job}) => {
  return (

      <div className='similarJobcard'>
        <h3>{job.title}</h3>
        <p>{job.shortDescription}</p>

        <div className='similarJobBottom'>
          <p>{job.workType}</p>

          <Link to={`/career/${job.id}`}>
           <button>More Position</button>
          </Link>

        </div>

      </div>
  )
}

export default SimilarJobCard
