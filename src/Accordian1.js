import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accordian1 = () => {

  /* KEEN ACCORDION COMPONENT */

  return (
    <div className="accordion accordion-light accordion1" id="accordionExample5">
      <div className="card">
        <div className="card-header" id="headingOne5">
          <div className="card-title" data-toggle="collapse" data-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5">
            <FontAwesomeIcon icon="gift" className="icon" fixedWidth /> A true gift.
          </div>
        </div>
        <div id="collapseOne5" className="collapse show" aria-labelledby="headingOne5" data-parent="#accordionExample5">
          <div className="card-body">
            Yes there is a gift... the gift of enjoying everyday life. LEarn to unlock this gift daily!
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo5">
          <div className="card-title collapsed" data-toggle="collapse" data-target="#collapseTwo5" aria-expanded="false" aria-controls="collapseTwo5">
            <FontAwesomeIcon icon={['fab', 'fort-awesome']} className="icon" fixedWidth /> Build a cool fort!
          </div>
        </div>
        <div id="collapseTwo5" className="collapse" aria-labelledby="headingTwo5" data-parent="#accordionExample5">
          <div className="card-body">
            Forts can be made of many things including (but not limited to): pillows, blankets, mud, cardboard, tacos, walls, stuff, things, toothpicks, and concrete.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree5">
          <div className="card-title collapsed" data-toggle="collapse" data-target="#collapseThree5" aria-expanded="false" aria-controls="collapseThree5">
            <FontAwesomeIcon icon="crow" className="icon" fixedWidth /> BIRDS!
          </div>
        </div>
        <div id="collapseThree5" className="collapse" aria-labelledby="headingThree5" data-parent="#accordionExample5">
          <div className="card-body">
            If you don't love them, you're not learning enough facts... Once you know how to spot a song sparrow vs a house sparrow your world will open up.
          </div>
        </div>
      </div>
    </div>
  )
};

export default Accordian1;
