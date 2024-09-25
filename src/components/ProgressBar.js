import React from 'react';

const ProgressBar = ({ label, value, goal }) => {
  const percentage = (value / goal) * 100;

  return (
    <div className="progress-bar">
      <span>{label}</span>
      <div className="bar" style={{ width: `${percentage}%` }}>
        {value} / {goal}
      </div>
    </div>
  );
};

export default ProgressBar;
 