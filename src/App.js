import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Rep from './Rep.js';
import Admin from './Admin.js';
import A11yBar from './A11yBar.js';

import './App.css';
import logo from './projX.png';
import user from './user.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const App = () => {

  const [currentView, setCurrentView] = useState("Rep");

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
            <li className={currentView === "Rep" ? "nav-list-item selected-view" : "nav-list-item"} onClick={() => {setCurrentView("Rep")}}>
              <Link to="/rep/work"> Rep </Link></li>
            <li className={currentView === "Admin" ? "nav-list-item selected-view" : "nav-list-item"} onClick={() => {setCurrentView("Admin")}}>
              <Link to="/admin/weekly-results"> Admin </Link></li>
          </ul>
        </nav>
      </header>
      <A11yBar />
      <Router>
        <Rep path="rep/*" />
        <Admin path="admin/*" />
      </Router>
    </>
  );
}

export default App;
