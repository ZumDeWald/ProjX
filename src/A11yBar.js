import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './a11yBar.css';

const A11yBar = () => {

  const buttonSlide = (e) => {
    e.target.classList.toggle("slide-right");
  }
  return(
    <aside className="a-bar-container">
      <h4 className="a11y-bar-header">View Preferences</h4>
      <FontAwesomeIcon icon="universal-access" className="a11y-icon"/>

      <div className="a11y-option-container grid-position-1">
        <h5 className="a11y-option-title">Light/Dark Mode</h5>
        <div className="option-slider-container">
          <div className="option-slider-button" onClick={buttonSlide}></div>
        </div>
      </div>

      <div className="a11y-option-container grid-position-2">
        <h5 className="a11y-option-title">Font Size</h5>
        <div className="option-slider-container">
          <div className="option-slider-button slide-right" onClick={buttonSlide}></div>
        </div>
      </div>
    </aside>
  )
}


export default A11yBar;
