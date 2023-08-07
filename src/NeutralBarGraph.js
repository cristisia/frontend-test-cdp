import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const NeutralBarGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://ivanbudianto.github.io/test-json/test.json')
            .then(response => response.json())
            .then(jsonData => {
                const neutralData = jsonData.filter(entry => entry.sentiment === "Neutral");
                setData(neutralData);
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
            label: 'Neutral Sentiment Count',
            data: sentimentCounts,
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            borderColor: 'rgba(0, 255, 0, 1)',
            borderWidth: 1,
        }]
    };

    return (
        <div>
            <Bar data={chartData} />
        </div>
    );
};

export default NeutralBarGraph;
