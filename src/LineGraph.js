import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://ivanbudianto.github.io/test-json/test.json')
      .then(response => response.json())
      .then(jsonData => {
        const borderlandsData = jsonData.filter(entry => entry.source === "Borderlands");
        setData(borderlandsData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const sentiments = data.map(entry => entry.sentiment === "Positive").map(entry => entry.sentiment === "Negative")
  .map(entry => entry.sentiment === "Neutral").map(entry => entry.sentiment === "Irrelevant");

  const chartData = {
    labels: data.map(entry => entry.datetime),
    datasets: [
      {
        label: 'Positive',
        data: sentiments,
        fill: false,
        borderColor: 'rgba(0, 0, 255, 1)',
        borderWidth: 2,
      },
      {
        label: 'Negative',
        data: sentiments,
        fill: false,
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 2,
      },
      {
        label: 'Neutral',
        data: sentiments,
        fill: false,
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 2,
      },
      {
        label: 'Irrelevant',
        data: sentiments,
        fill: false,
        borderColor: 'rgba(255, 255, 0, 1)',
        borderWidth: 2,
      },
    ]
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
