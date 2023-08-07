import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const Piegraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://ivanbudianto.github.io/test-json/test.json')
        .then(response => response.json())
        .then(jsonData => {
            const borderlandsData = jsonData.filter(entry => entry.source);
            setData(borderlandsData);
        }, []);
    });
    
    const sentimentCounts = {
        Positive: 0,
        Negative: 0,
        Neutral: 0,
        Irrelevant: 0,
    } 

    data.forEach(entry => {
        sentimentCounts[entry.sentiment]++;
    });

    const chartData = {
        labels: Object.keys(sentimentCounts),
        datasets: [{
            data: Object.values(sentimentCounts),
            backgroundColor: [
            'rgba(0, 0, 255, 0.6)',
            'rgba(255, 0, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            ]
        }]
    };

    return (
        <div>
            <Pie data={chartData} />
        </div>
    );
};

export default Piegraph;
