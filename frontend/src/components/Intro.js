import React from 'react';
import './Intro.scss';

export class Intro extends React.Component {
  render() {
    return (
      <div className='intro'>
        <h1>Scheduling patches sucks.</h1>
        <h2>Use FlashForward to coordinate when patches happen, create custom patching
            policies, and optimize patch scheduling</h2>
        <form action="#contact">
            <input type="submit" value="Let's talk!" />
        </form>
      </div>
    );
  }
}

