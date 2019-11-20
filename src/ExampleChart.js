import React, { useEffect } from 'react';
import Chart from 'chart.js';

const ExampleChart = ({ chartId, options }) => {

  const data = options.dataSet;
  const title = options.title;

  useEffect(() => {
    const ctx = document.getElementById(`${chartId}`).getContext('2d');

    const exampleChart = new Chart(ctx,{
      type: 'polarArea',
      data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          datasets: [{
              label: 'days of the week',
              data: data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      display: false
                  },
                  gridLines: {
                    display: false
                  }
              }]
          },
          layout: {
            padding: {
              top: 50,
              right: 10,
              bottom: 10,
              left: 10
            }
          },
          legend: {
            position: 'left'
          },
          title: {
            display: true,
            position: 'top',
            fontSize: 15,
            text: `${title} Results`
          }
      }
  });
  return () => {
    exampleChart.destroy();
  }
}, [chartId, data, title]);

  return (
    <div className="chart">
      <canvas id={chartId} width="400px" height="300px" />
    </div>
  )
};

export default ExampleChart;
