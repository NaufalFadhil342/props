import React from 'react';
import './App.css';

export const Job = (props) => {
  const { company, position, salary } = props;

  return (
    <div className="job">
      <h1>{company}</h1>
      <h3>{position}</h3>
      <p>Salary: {salary}</p>
    </div>
  );
};
