import React, { useState } from 'react';
import WorkoutLog from './components/WorkoutLog';
import GoalSetting from './components/GoalSetting';
import ProgressChart from './components/ProgressChart';
import MusicIntegration from './components/MusicIntegration';
import SpotifyPlayer from './components/SpotifyPlayer';

import ProgressBar from './components/ProgressBar';

import './styles.css';

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [goal, setGoal] = useState('');
  const [playlistUrl, setPlaylistUrl] = useState('');

  const activityData = {
    caloriesBurned: 500,
    stepsTaken: 7000,
    distanceCovered: 5,
    activeHours: 2,
  };

  const goals = {
    calories: 2000,
    steps: 10000,
  };

  const handleLogWorkout = (workout) => {
    setWorkouts([...workouts, { ...workout, date: new Date().toLocaleDateString() }]);
  };

  const handleSetGoal = (goal) => {
    setGoal(goal);
  };

  const handleAddPlaylist = (url) => {
    setPlaylistUrl(url);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Fitness Tracker</h1>
      </header>

      
      

      <div className="goal-section">
        <GoalSetting onSetGoal={handleSetGoal} />
        {goal && <h3>Your Current Goal: {goal.type} - {goal.value} by {goal.deadline}</h3>}
      </div>

      <div className="workout-section">
        <WorkoutLog onLog={handleLogWorkout} />
        <ProgressChart workouts={workouts} />
        <div className="workout-cards">
          {workouts.map((workout, index) => (
            <div className="card" key={index}>
              <span></span>
              <div className="content">
                <h4>{workout.exercise}</h4>
                <p>Duration: {workout.duration} mins</p>
                <p>Calories: {workout.calories}</p>
                <p>Date: {workout.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="music-section">
        <MusicIntegration onAddPlaylist={handleAddPlaylist} />
        {playlistUrl && <SpotifyPlayer playlistUrl={playlistUrl} />}
      </div>
    </div>
  );
};

export default App;
