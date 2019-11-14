import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <div className="App">
      <header className="header">
        <p>This is a Header</p>
      </header>
      <main className="main">
        <section className="top-section-container">
          <div className="title-text-container">
            <p className="title-text">We're Here</p>
            <p className="title-text">To Make</p>
            <p className="title-text">A Statement</p>
          </div>
          <p className="main-side-title">Don't <br /> call <br /> it a <br /> Side <br /> Proj!</p>
        </section>

        <section className="part-2">
          <div className="item-box-container">

            <div className="item-box">
              <div className="icon-container">
                <FontAwesomeIcon icon="gift" className="icon" fixedWidth />
              </div>
              <div className="item-box-desc">
              <p>This is the first item box in this row.</p>
              </div>
            </div>

            <div className="item-box">
              <div className="icon-container">
                <FontAwesomeIcon icon={['fab', 'fort-awesome']} className="icon" fixedWidth />
              </div>
              <div className="item-box-desc">
              <p>This is the second item box in this row.</p>
              </div>
            </div>

            <div className="item-box">
              <div className="icon-container">
                <FontAwesomeIcon icon="crow" className="icon" fixedWidth />
              </div>
              <div className="item-box-desc">
              <p>This is the third item box in this row.</p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
