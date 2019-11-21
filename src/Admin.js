import React from 'react';

import ExampleChart from './ExampleChart.js';
import TeamData from './TeamData.js';

function Admin() {

  return (
    <main className="main">
    <section className="main-submenu">
    <ul>
      <li>Admin View Options</li>
    </ul>
    </section>
      <section className="main-center">
        <ExampleChart chartId={TeamData[0].name} options={{
            title: TeamData[0].name,
            dataSet: TeamData[0].dataSet
          }}/>
      </section>
    </main>
  );
}

export default Admin;
