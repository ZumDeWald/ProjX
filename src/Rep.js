import React, { useState } from 'react';
import FormResponses, {SampleEmailQuestions} from './ExampleEmailData.js';
import './rep.css';

function Rep() {

  const [currentEmail, setCurrentEmail] = useState(SampleEmailQuestions.first);

  const appendTextArea = (insertText) => {
    document.getElementById("response-textarea").value += `${insertText}`;
  }

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
          <textarea id="response-textarea" rows="10" className="rep-text-area">
            {`${currentEmail}

            `}
          </textarea>
            {FormResponses.map((item, i) => (
              <button value={item.title} key={`form ${i}`} onClick={() => {appendTextArea(FormResponses[i].response)}}>{item.title}</button>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Rep;
