import React from 'react';
import { Router } from '@reach/router';
import Rep from './Rep.js';
import Admin from './Admin.js';
import NavLink from './NavLink.js';

import './App.css';
import logo from './projX.png';
import user from './user.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {

  return (
    <>
      <header>
        <section className="header-content">
          <div className="logo-container">
            <img src={logo} alt="Joyce Meyer Logo" className="logo"/>
            <h1 className="header-title">Customer Response Portal</h1>
          </div>
          <div className="header-menu">
            <FontAwesomeIcon icon="search" className="menu-icon" fixedWidth />
            <FontAwesomeIcon icon="bell" className="menu-icon" fixedWidth />
            <FontAwesomeIcon icon="cog" className="menu-icon" fixedWidth />
            <FontAwesomeIcon icon="th" className="menu-icon" fixedWidth />
            <img src={user} alt="User Icon" className="user-icon" />
          </div>
        </section>
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">
              <NavLink to="/rep/work"> Rep </NavLink></li>
            <li className="nav-list-item">
              <NavLink to="/admin/weekly-results"> Admin </NavLink></li>
          </ul>
        </nav>
      </header>
      <Router>
        <Rep path="rep/*" />
        <Admin path="admin/*" />
      </Router>
    </>
  );
}

export default App;
