import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import io from 'socket.io-client';
import './App.css'; // Import the CSS file

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const App = () => {
  const [cpuData, setCpuData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('cpuData', (data) => {
      console.log('Received CPU data:', data);
      setCpuData((prevData) => [...prevData.slice(-9), data.cpuUsage]);
      setLabels((prevLabels) => {
        const newLabels = prevLabels.length < 10 ? [...prevLabels, ''] : [...prevLabels.slice(-9), ''];
        return newLabels;
      });
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'CPU Usage (%)',
        data: cpuData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default App;
