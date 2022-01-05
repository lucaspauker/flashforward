import React from 'react';
import './Intro.scss';

import { animateScroll as scroll } from 'react-scroll'

export class Intro extends React.Component {
  render() {
    return (
      <div className='intro'>
        <h1>Scheduling patches sucks.</h1>
        <h2>Use FlashForward to coordinate when patches happen, create custom patching
            policies, and optimize patch scheduling</h2>
        <a onClick={scroll.scrollToBottom}>
            Let's talk!
        </a>
      </div>
    );
  }
}

