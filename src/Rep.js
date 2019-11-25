import React from 'react';
import './rep.css';

function Rep() {

  return (
    <main className="main">
      <section className="main-submenu">
        <h4 className="submenu-header">Views</h4>
        <ul className="submenu-list">
          <li className="submenu-item"> WorkSpace </li>
        </ul>
      </section>
      <section className="main-center">
        <div className="rep-text-area-container">
          <textarea rows="10" className="rep-text-area">
            ENTER TEXT HERE
          </textarea>
        </div>
      </section>
    </main>
  );
}

export default Rep;
