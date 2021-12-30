//import { Component } from 'react';
import React, { Component } from "react";
import { render } from "react-dom";
import './App.scss';

import { Navbar } from './Navbar';
import { Intro } from './Intro';
import { Benefits } from './Benefits';
import { Why } from './Why';
import { About } from './About';
import { Contact } from './Contact';

class App extends Component {
  render() {
    return (
      <div className='background'>
        <div className='main'>
          <Navbar/>
          <Intro/>
          <Benefits/>
          <Why/>
          <About/>
          <Contact/>
        </div>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
