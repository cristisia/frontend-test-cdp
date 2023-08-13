import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const PositiveBarGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://ivanbudianto.github.io/test-json/test.json')
          .then(response => response.json())
          .then(jsonData => {
            const positiveData = jsonData.filter(entry => entry.sentiment === "Positive");
            setData(positiveData);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          }
        );
    }, []);

    const sources = Array.from(new Set(data.map(entry => entry.source)));
    const sentimentCounts = sources.map(source => data.filter(entry => entry.source === source).length);

    const chartData = {
        labels: sources,
        datasets: [{
            label: 'Positive Sentiment Count',
            data: sentimentCounts,
            backgroundColor: 'rgba(0, 0, 255, 0.6)',
            borderColor: 'rgba(0, 0, 255, 1)',
            borderWidth: 1,
        }]
    };

    const option = {
      plugins: {
        legend: {
          display: false
        }
      }
    }

    return (
        <div>
            <Bar data={chartData} options={option}/>
        </div>
    );
};

export default PositiveBarGraph;
