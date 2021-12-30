import React from 'react';
import './Benefits.scss';

import { BsClock, BsGraphDown, BsPeople } from 'react-icons/bs'

export class Benefits extends React.Component {
  render() {
    return (
      <div className='benefits'>
        <ul>
          <li>
            <BsClock/>
            <h2>Reduce Downtime</h2>
            <p>Measure how patches impact operations to plan better and create custom operational risk metrics.</p>
          </li>
          <li>
            <BsGraphDown/>
            <h2>Decrease Vulnerabilities</h2>
            <p>When you patch smarter, your network has fewer vulnerabilities.</p>
          </li>
          <li>
            <BsPeople/>
            <h2>Coordinate Faster</h2>
            <p>Coordinating patches eats up valuable time. According to surveyed infosec professionals, 68 hours of their team’s time is spent on patch coordination.</p>
          </li>
        </ul>
      </div>
    );
  }
}

