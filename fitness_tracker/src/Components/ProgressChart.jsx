import React from 'react';
import './ProgressChart.css';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement, // Required for Doughnut/Pie charts
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

const ProgressChart = () => {
    // Chart data
    const data = {
        labels: ['Cardio ', 'Stretching  ', 'Treadmill ', 'Strength '], // X-axis labels
        datasets: [
            {
                label: '# of Votes',
                data: [6, 5, 6, 5], // Data points
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(83, 33, 163)',
                    'rgb(243, 121, 6)',
                    'rgba(13, 179, 143, 0.66)',
                ],
               
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Progress',
                position:'top'
            },
        },
    };

    return (
        <div className='progresschart m-2 ' style={{padding:'0 80px'}}> 
    <Doughnut data={data} options={options} />
    </div>
    )
};

export default ProgressChart;