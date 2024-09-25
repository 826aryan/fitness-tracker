import React, { useState } from 'react';

const WorkoutLog = ({ onLog }) => {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLog({ 
      exercise, 
      duration: parseInt(duration, 10),  // Specify radix 10
      calories: parseInt(calories, 10)   // Specify radix 10
    });
    setExercise('');
    setDuration('');
    setCalories('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log Your Workout</h2>
      <input
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        placeholder="Exercise"
        required
      />
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (minutes)"
        required
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories Burned"
        required
      />
      <button type="submit">Log Workout</button>
    </form>
  );
};

export default WorkoutLog;
