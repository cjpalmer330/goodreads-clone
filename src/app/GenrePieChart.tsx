'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Science Fiction', 'Romance', 'Fantasy', 'Philosophy', 'Literary Fiction', 'Graphic Novels'],
  datasets: [
    {
      label: 'Number of Books Read',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 122, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(105, 259, 64, 0.7)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(105, 259, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: 'white'
      }
    }
  }
}

export default function GenrePieChart() {
  return <Pie data={data} />;
}
