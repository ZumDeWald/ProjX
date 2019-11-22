import React from 'react';
import { Router } from '@reach/router';

import ExampleChart from './ExampleChart.js';
import TeamData from './TeamData.js';
import NavLink from './NavLink.js';

function Admin() {

  return (
    <main className="main">
      <section className="main-submenu">
        <h4 className="submenu-header">Views</h4>
        <ul className="submenu-list">
          <li className="submenu-item">
            <NavLink to="/admin/weekly-results"> Weekly </NavLink></li>
          <li className="submenu-item">
            <NavLink to="/admin/response-totals"> Responses </NavLink></li>
          <li className="submenu-item">
            <NavLink to="/admin/form-responses"> Forms </NavLink></li>
        </ul>
      </section>
      <section className="main-center">
        <Router>
          <ExampleChart path="weekly-results"
            options={{
              title: TeamData[0].name,
              dataSet: TeamData[0].dataSet
            }}/>
        </Router>
      </section>
    </main>
  );
}

export default Admin;
