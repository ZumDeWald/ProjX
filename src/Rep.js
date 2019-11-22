import React from 'react';
import { Router } from '@reach/router';

import ExampleChart from './ExampleChart.js';
import TeamData from './TeamData.js';
import NavLink from './NavLink.js';

function Rep() {

  return (
    <main className="main">
      <section className="main-submenu">
        <h4 className="submenu-header">Views</h4>
        <ul className="submenu-list">
          <li className="submenu-item">
            <NavLink to="/rep/work"> Work </NavLink></li>
          <li className="submenu-item">
            <NavLink to="/rep/forms"> Forms </NavLink></li>
          <li className="submenu-item">
            <NavLink to="/rep/theme"> Theme </NavLink></li>
        </ul>
      </section>
      <section className="main-center">
        <Router>
          <ExampleChart path="work" chartId={TeamData[1].name} options={{
              title: TeamData[1].name,
              dataSet: TeamData[1].dataSet
            }}/>
        </Router>
      </section>
    </main>
  );
}

export default Rep;
