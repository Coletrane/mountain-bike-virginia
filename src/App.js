import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header';
import Blog from './pages/Blog';
import Results from './pages/Results';
import Footer from './components/Footer';

export default class App extends Component {


  render() {
    return (
      <Router>

        <section class="hero is-primary is-large header-image">
          <div class="hero-head">
            <header class="nav">
              <div class="container">
                <div class="nav-left">
            <span class="nav-item">
              <Link to="/">
                <img class="mtbva" src="./resources/img/mtbva.png"/>
              </Link>
            </span>
                  <span class="nav-item">
              <Link to="/">
                <img class="xxcva" src="./resources/img/XXCVA.jpg" alt="XXCVA"/>
              </Link>
            </span>
                </div>
                <div class="nav-right">
                  <Link to="/results">
                    Results
                  </Link>
                  <a class="navlink nav-item fb"
                     href="https://www.facebook.com/xxcva/">
                    <img class="fb" src="./resources/img/fb.svg"/>
                  </a>
                </div>
              </div>
            </header>
          </div>
          <div class="${currentRoute === 'blog' ? 'header-blog hero-body' : 'header-other hero-body'}">
            <div class="container has-text-centered">
              <h1 class="title is-2">
                Mountain Bike Virginia
              </h1>
              <h2 class="subtitle is-5">
                Exposing the trove of trails in Virginia
              </h2>
              <p>
                <a class="button is-outlined"
                   href="https://www.facebook.com/pg/xxcva/events/">
            <span class="ride-race">
              Ride or Race with us
            </span>
                </a>
              </p>
            </div>
          </div>
        </section>

        <section class="section main">
          <Route exact path="/" component={Blog}/>
          <Route exact path="/blog" component={Blog}/>

          <Route exact path="/results" component={Results}/>
        </section>

        <footer class="footer footer-image">
          <div class="container logos">
            <div class="logos-container">

              <div class="columns is-mobile">
                <div class="column">
                  <img src="./resources/img/va-blueridge.png"/>
                </div>
                <div class="column">
                  <img src="./resources/img/starlight.png"/>
                </div>
              </div>

              <div class="columns is-mobile">
                <div class="column">
                  <img src="./resources/img/alleghany.jpg"/>
                </div>
                <div class="column">
                  <img src="./resources/img/blackwater.png"/>
                </div>
                <div class="column">
                  <img src="./resources/img/jtrg.jpg"
                       style="margin-top: 1rem"/>
                </div>

              </div>

              <div class="columns is-mobile">
                <div class="column">
                  <img src="./resources/img/parkway.png"/>
                </div>
                <div class="column">
                  <img src="./resources/img/outdoortrails.JPG"/>
                </div>
              </div>

              <div class="columns is-mobile">
                <div class="column">
                  <img src="./resources/img/woods.png"
                       style="margin-top: 2rem"/>
                </div>
                <div class="column">
                  <img src="./resources/img/bath.jpg"
                       class="bath"/>
                </div>
                <div class="column">
                  <img src="./resources/img/massanutten.png"
                       class="nutten"/>
                </div>
              </div>

              <div class="columns is-mobile">
                <div class="column">
                  <img src="./resources/img/sbc.gif"
                       class="sbc"/>
                </div>
                <div class="column">
                  <img src="./resources/img/tavern.gif"/>
                </div>
                <div class="column">
                  <img src="./resources/img/east-coasters.jpg"/>
                </div>
              </div>
            </div>
          </div>

          <div class="container copyright">
            <div class="content has-text-centered">
              <p>
                © 2017 Virginia Championship Comission, Inc.
              </p>
              <p>
                Developed by Cole Inman.
              </p>
              <p>
                <a class="icon" href="https://github.com/coletrane">
                  <img src="./resources/img/github.svg"
                       class="github"/>
                </a>
              </p>
            </div>
          </div>
        </footer>

      </Router>
    );
  }
}

export default App;
