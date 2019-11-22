import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';
import { WeeklyData } from './TeamData.js';

const ResponsesChart = ({options}) => {

  const [currentDataSet, setCurrentDataSet] = useState(WeeklyData);

  useEffect(() => {
    const ctx = document.getElementById(`${options.title}`).getContext('2d');

    const exampleChart = new Chart(ctx,{
      type: 'horizontalBar',
      data: {
          datasets: [{
            stack: "test",
            label: "Total Emails",
            data: [WeeklyData.totalEmails],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
            barThickness: 25
          },
          {
            stack: "test",
            label: "Responded",
            data: [WeeklyData.respondedEmails],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
            barThickness: 20
        }],
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                    display: false
                  },
                  gridLines: {
                    display: true
                  },
                  stacked: true,
              }],
              xAxes: [{
                  ticks: {
                    display: true,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true
                  },
                  stacked: false,
              }]
          },
          // layout: {
          //   padding: {
          //     top: 10,
          //     right: 10,
          //     bottom: 10,
          //     left: 10
          //   }
          // },
          legend: {
            position: 'bottom'
          },
          title: {
            display: false,
          }
      }
  });
  return () => {
    exampleChart.destroy();
  }
}, [currentDataSet, options]);

  return (
    <div className="horizontal-tile">
      <h3 className="tile-header">Email Responses (responded / received)</h3>
      <div className="chart">
        <canvas id={options.title} width="400px" height="300px" />
      </div>
    </div>
  )
};

export default ResponsesChart;
