import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './a11yBar.css';

const A11yBar = () => {

  const a11yContainer = document.getElementsByClassName("a-bar-outer-container");

  const a11yIconContainer = document.getElementsByClassName("a11y-icon-container");

  const a11yIcon = document.getElementsByClassName("a11y-icon");

  const openCloseA11y = () => {
    a11yContainer[0].classList.toggle("small-container");
    a11yIconContainer[0].classList.toggle("slide-right-button");
    a11yIcon[1].classList.toggle("rotate-open");
  }

  const buttonSlide = (e) => {
    e.target.classList.toggle("slide-right-button");
  }

  return(
    <aside className="a-bar-outer-container small-container">
      <section className="a-bar-inner-container">
        <h4 className="a11y-bar-header">View Preferences</h4>
        <div className="a11y-icon-container slide-right-button">
          <FontAwesomeIcon icon="universal-access" className="a11y-icon hover-hide" onClick={openCloseA11y} fixedWidth/>
          <FontAwesomeIcon icon="arrow-circle-up" className="a11y-icon rotate-close rotate-open" fixedWidth/>
        </div>

        <div className="a11y-option-container grid-position-1">
          <h5 className="a11y-option-title">Light/Dark Mode</h5>
          <div className="option-slider-container">
            <div className="option-slider-button" onClick={buttonSlide}></div>
          </div>
        </div>

        <div className="a11y-option-container grid-position-2">
          <h5 className="a11y-option-title">Font Size</h5>
          <div className="option-slider-container">
            <div className="option-slider-button" onClick={buttonSlide}></div>
          </div>
        </div>
      </section>
    </aside>
  )
}


export default A11yBar;
