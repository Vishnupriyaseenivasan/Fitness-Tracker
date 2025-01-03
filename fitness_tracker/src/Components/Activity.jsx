import React from 'react';
import './Activity.css';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Activity = () => {
    // Chart data
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'], // X-axis labels
        datasets: [
            {
                label: '# of Votes',
                data: [12, 14, 11, 15, 22, 13, 16], // Data points
                backgroundColor: [
                    'rgb(114, 251, 146)',
                    'rgb(114, 251, 146)',
                    'rgb(114, 251, 146)',
                    'rgb(114, 251, 146)',
                    'rgb(19, 175, 66)',
                    'rgb(114, 251, 146)',
                    'rgb(114, 251, 146)',
                ],
                
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Activity',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Remove grid lines for X-axis
                },
            },
            y: {
                grid: {
                    display: false, // Remove grid lines for Y-axis
                },
                beginAtZero: true,
            },
        },
    };



    return (
      <div className='activity'>
      <Bar data={data} options={options} />
    </div>
    )
};

export default Activity;