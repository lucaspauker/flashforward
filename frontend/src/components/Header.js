import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
        <div className="container position-relative">
          <a className="navbar-brand" href="/">
            <div className="navbar-brand-regular">
              <b>Flashforward.ai</b>
            </div>
            <div className="navbar-brand-sticky">
              <b>Flashforward.ai</b>
            </div>
          </a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-inner">
            {/*  Mobile Menu Toggler */}
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <nav>
              <ul className="navbar-nav" id="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link scroll" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#why">Why Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#team">Our Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

