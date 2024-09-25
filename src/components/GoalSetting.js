// src/components/GoalSetting.js
import React, { useState } from 'react';

const GoalSetting = ({ onSetGoal }) => {
  const [goalType, setGoalType] = useState('');
  const [goalValue, setGoalValue] = useState('');
  const [goalDeadline, setGoalDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetGoal({ type: goalType, value: goalValue, deadline: goalDeadline });
    setGoalType('');
    setGoalValue('');
    setGoalDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Set Your Fitness Goal</h2>
      <input
        type="text"
        value={goalType}
        onChange={(e) => setGoalType(e.target.value)}
        placeholder="Goal Type (e.g., Weight Loss)"
        required
      />
      <input
        type="text"
        value={goalValue}
        onChange={(e) => setGoalValue(e.target.value)}
        placeholder="Goal Value (e.g., 5kg)"
        required
      />
      <input
        type="date"
        value={goalDeadline}
        onChange={(e) => setGoalDeadline(e.target.value)}
        required
      />
      <button type="submit">Set Goal</button>
    </form>
  );
};

export default GoalSetting;
