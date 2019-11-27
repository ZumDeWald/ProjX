import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './a11yBar.css';

const A11yBar = () => {
  return(
    <aside className="a-bar-container">
      <h4 className="a11y-bar-header">View Preferences</h4>
      <FontAwesomeIcon icon="universal-access" className="a11y-icon"/>
    </aside>
  )
}


export default A11yBar;
