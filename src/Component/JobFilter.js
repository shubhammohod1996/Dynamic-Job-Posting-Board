import React from 'react';

const JobFilter = ({ filter, setFilter }) => {
  return (
    <div className="mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Filter jobs by title"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default JobFilter;
