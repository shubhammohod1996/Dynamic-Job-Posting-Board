import React, { useState } from 'react';

const JobForm = ({ addJob }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({ title, description });
    console.log(e)
    setTitle('');
    setDescription('');
  };

  return (
    <div className="card mt-4 "style={{backgroundColor:"#cca8e9"}}>
      <div className="card-body">
        <h5 className="card-title">Post a Job</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              className="form-control"
              placeholder='Looking For Job'
              value={title}
              onChange={(e) => setTitle(e.target.value,e)}
              required
              style={{backgroundColor:'rgb(249,249,255)'}}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Job Description</label>
            <textarea
              className="form-control"
              placeholder='Description'
              style={{backgroundColor:'rgb(249,249,255)'}}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary m-6"style={{backgroundColor:"#2772db"}}>Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
