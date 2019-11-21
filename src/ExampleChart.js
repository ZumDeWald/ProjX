import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';
import TeamData from './TeamData.js';

const ExampleChart = () => {

  const [currentDataSet, setCurrentDataSet] = useState(TeamData[0]);

  const weeklyTotal = currentDataSet.dataSet.reduce((total, next) => total + next);

  useEffect(() => {
    const ctx = document.getElementById("multi-chart-example").getContext('2d');

    const exampleChart = new Chart(ctx,{
      type: 'polarArea',
      data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          datasets: [{
              data: currentDataSet.dataSet,
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
                      display: false
                  },
                  gridLines: {
                    display: false
                  }
              }]
          },
          layout: {
            padding: {
              top: 10,
              right: 10,
              bottom: 10,
              left: 10
            }
          },
          legend: {
            position: 'bottom'
          },
          title: {
            display: true,
            position: 'top',
            fontSize: 15,
            text: `${currentDataSet.name} : ${weeklyTotal}`
          }
      }
  });
  return () => {
    exampleChart.destroy();
  }
}, [currentDataSet, weeklyTotal]);

const updateDataSet = (i) => {
  setCurrentDataSet(TeamData[i]);
}

  return (
    <div className="horizontal-tile">
      <h3 className="tile-header">Weekly Results</h3>
      <ul className="tile-list-buttons">
        {TeamData.map((item, i) => (
          <li><button className="list-button" onClick={() => {updateDataSet(i)}}>{item.name}</button></li>
        ))}
      </ul>
      <div className="chart">
        <canvas id="multi-chart-example" width="400px" height="300px" />
      </div>
    </div>
  )
};

export default ExampleChart;
