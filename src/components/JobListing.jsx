import React from "react";
import { useState } from "react";
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;

  if (!showFullDescription && description.length > 87) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="dark:bg-neutral-800 bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="dark:text-neutral-300 text-gray-600 my-2">{job.type}</div>
          <h3 className="dark:text-white text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5 dark:text-white">{description}</div>
        <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-700" >
          { description.length > 87 ? 
            showFullDescription ? "Less" : "More"
            : ''
          }
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border dark:border-neutral-700 border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="dark:text-orange-600 text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1"/>
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
