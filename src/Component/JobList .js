import React from 'react';

const JobList = ({ jobs, filter }) => {
  return (
    <div className="mt-4">
      <h5>Job Listings</h5>
      {jobs.filter(job => job.title.includes(filter)).map((job, index) => (
        <div className="card mt-2" key={index}>
          <div className="card-body">
            <h5 className="card-title">{job.title}</h5>
            <p className="card-text">{job.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
