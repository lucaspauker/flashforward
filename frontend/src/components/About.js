import React from 'react';
import './About.scss';

import { BsLinkedin } from "react-icons/bs";

export class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <div className='image-section'>
          <div className='container'>
            <img src='static/frontend/img/lucas_headshot.jpg' alt='Lucas Pauker Headshot' />
            <a href='https://www.linkedin.com/in/lucas-pauker-7b4571150/' target='_blank'><BsLinkedin/></a>
          </div>
          <div className='container'>
            <img src='static/frontend/img/shreyas_headshot.jpg' alt='Shreyas Parab Headshot' />
            <a href='https://www.linkedin.com/in/sparab18/' target='_blank'><BsLinkedin/></a>
          </div>
        </div>
        <h3>About us</h3>
        <h4>
          We are Stanford data nerds with experience in cybersecurity looking to improve vulnerability patching operations.
          We have spoken to hundreds of IT security professionals from organizations ranging from Department of Defense Agencies to universities to Fortune 500s.
          We have eclectic backgrounds for sure....ranging from starting a funky necktie company to building tech to address the opioid epidemic.
        </h4>
      </div>
    );
  }
}

