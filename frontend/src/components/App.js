import React, { Component } from "react";
import { render } from "react-dom";
import './App.scss';

import { Header } from './Header';
import { Hero } from './Hero';
import { Benefits } from './Benefits';
import { Why } from './Why';
import { Team } from './Team';
import { Contact } from './Contact';

import { FaArrowUp } from 'react-icons/fa'

class App extends Component {
  render() {
    return (
      <div className='main'>
        <div id="scrollUp" title="Scroll To Top">
          <FaArrowUp />
        </div>

        <Header/>
        <Hero/>
        <Benefits/>
        <Why/>
        <Team/>
        <Contact/>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
