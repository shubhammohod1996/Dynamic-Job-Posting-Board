import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobForm from './Component/JobForm';
import JobFilter from './Component/JobFilter';
import JobList from './Component/JobList ';


const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <div className="container mt-5 pm-6" style={{backgroundColor:"#cadefc"}}>
      <h1 className="text-center">Job Posting Board</h1>
      <JobForm addJob={addJob} />
      <JobFilter filter={filter} setFilter={setFilter} />
      <JobList jobs={jobs} filter={filter} />
    </div>
  );
};

export default App;
