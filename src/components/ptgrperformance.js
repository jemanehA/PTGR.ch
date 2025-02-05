import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PTGRPerformance = () => {
  const data = {
    labels: [
      '12/1/2023', '1/1/2024', '2/1/2024', '3/1/2024', '4/1/2024',
      '5/1/2024', '6/1/2024', '7/1/2024', '8/1/2024', '9/1/2024',
      '10/1/2024', '11/1/2024'
    ],
    datasets: [
      {
        label: 'Solid',
        data: [
          100000, 115976, 117552, 170649, 207776, 167190,
          203169, 193821, 180789, 168493, 164086, 169873
        ],
        borderColor: 'orange',
        borderWidth: 3,
        fill: false,
      },
      {
        label: 'Balanced',
        data: [
          100000, 125770, 129917, 192282, 228394, 172236,
          203403, 171925, 166208, 156295, 153923, 173823
        ],
        borderColor: 'blue',
        borderWidth: 3,
        fill: false,
      },
      {
        label: 'Growth',
        data: [
          100000, 131596, 136078, 223466, 293015, 215150,
          238908, 197845, 176169, 139357, 146928, 156732
        ],
        borderColor: 'purple',
        borderWidth: 3,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 16,
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          font: {
            size: 18,
          },
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value (CHF)',
          font: {
            size: 18,
          },
        },
        ticks: {
          font: {
            size: 14,
          },
        },
        min: 0,
        max: 300000,
      },
    },
  };

  return (
    <div style={{ width: '100%' }}>

      <div style={{ height: '500px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default PTGRPerformance;
