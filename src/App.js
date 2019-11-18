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
            <p className="title-text">To Make A</p>
            <p className="title-text">Statement</p>
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
        <section>
          {/* begin::Accordion */}
          <div class="accordion accordion-outline" id="accordionExample6">
            <div class="card">
              <div class="card-header" id="headingOne6">
                <div class="card-title" data-toggle="collapse" data-target="#collapseOne6" aria-expanded="true" aria-controls="collapseOne6">
                  <i class="flaticon-folder-1"></i> Collapsible Group Item #1
                </div>
              </div>
              <div id="collapseOne6" class="card-body-wrapper collapse show" aria-labelledby="headingOne6" data-parent="#accordionExample6">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo6">
                <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseTwo6" aria-expanded="false" aria-controls="collapseTwo6">
                  <i class="flaticon-home-1"></i> Collapsible Group Item #2
                </div>
              </div>
              <div id="collapseTwo6" class="card-body-wrapper collapse" aria-labelledby="headingTwo5" data-parent="#accordionExample6">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree6">
                <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseThree6" aria-expanded="false" aria-controls="collapseThree6">
                  <i class="flaticon-multimedia-5"></i> Collapsible Group Item #3
                </div>
              </div>
              <div id="collapseThree6" class="card-body-wrapper collapse" aria-labelledby="headingThree6" data-parent="#accordionExample6">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>

          {/* end::Accordion */}
        </section>
      </main>
    </div>
  );
}

export default App;
