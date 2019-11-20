import React from 'react';

import './App.css';
import logo from './jmmLogo.png';
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
        <nav></nav>
      </header>
      <main className="main">
        <section className="main-center">
        </section>
      </main>
    </>
  );
}

export default App;
