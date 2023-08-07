import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const IrrelevantBarGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://ivanbudianto.github.io/test-json/test.json')
            .then(response => response.json())
            .then(jsonData => {
                const irrelevantData = jsonData.filter(entry => entry.sentiment === "Irrelevant");
                setData(irrelevantData);
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
            label: 'Irrelevant Sentiment Count',
            data: sentimentCounts,
            backgroundColor: 'rgba(255, 255, 0, 0.5)',
            borderColor: 'rgba(255, 255, 0, 1)',
            borderWidth: 1,
        }]
    };

    return (
        <div>
            <Bar data={chartData} />
        </div>
    );
};

export default IrrelevantBarGraph;
