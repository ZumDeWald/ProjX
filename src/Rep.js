import React, { useState } from 'react';
import FormResponses, {SampleEmailQuestions} from './ExampleEmailData.js';
import './rep.css';

function Rep() {

  const [currentEmail, setCurrentEmail] = useState(SampleEmailQuestions.first);

  const [formStagingAreaText, setFormStagingAreaText] = useState("")

  const appendTextArea = (area, insertText) => {
    document.getElementById(`${area}`).value += `${insertText}`;
  }

  const clearTextArea = (area) => {
    document.getElementById(`${area}`).value = "";
  }

  const handleInputChange = (e) => {
    setFormStagingAreaText(e.target.value);
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
          <h2 className="section-header">Response Area</h2>
          <textarea id="response-textarea" rows="10" className="rep-textarea">
            {`${currentEmail}

`}
          </textarea>
          <button className="button-float shrink" onClick={() => {
              clearTextArea("response-textarea");
              appendTextArea("response-textarea", `${currentEmail}

  `)}}>&#10005; Reset Response</button>
          <button className="button-float shrink">=> Send it off</button>
        </div>

        <div className="rep-text-area-container">
          <h2 className="section-header margin-top-10">Customize Form Responses</h2>
          <div className="rep-control-panel">
            {FormResponses.map((item, i) => (
              <button value={item.title} key={`form ${i}`} onClick={() => {setFormStagingAreaText(prevText => prevText + item.response)}} className="button-standard tab">{item.title} &or;</button>
            ))}
          </div>
          <textarea id="form-preview" rows="10" className="rep-textarea" value={formStagingAreaText} onChange={handleInputChange} />
          <button className="button-float shrink" onClick={() => {setFormStagingAreaText("")}}>&#10005; Clear Form Area</button>
          <button className="button-float shrink" onClick={() => {appendTextArea("response-textarea", formStagingAreaText)}}>&#9650; Move To Response</button>
        </div>
      </section>
    </main>
  );
}

export default Rep;
