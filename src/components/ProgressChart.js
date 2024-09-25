import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressChart = ({ workouts }) => {
  const data = {
    labels: workouts.map((workout) => workout.exercise),
    datasets: [
      {
        label: 'Calories Burned',
        data: workouts.map((workout) => workout.calories),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Workout Progress</h2>
      <Bar data={data} />
    </div>
  );
};

export default ProgressChart;
