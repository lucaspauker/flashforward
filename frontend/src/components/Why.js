import React from 'react';
import './Why.scss';

export class Why extends React.Component {
  render() {
    return (
      <div className='why'>
        <h2>Why Create Custom Patching and Change Management Policies?</h2>
        <div className='why-body'>
          <ul>
            <li id='list'>
              <div className='why-list'>
                <ol>
                  <li>
                    <div className='content'>
                      <h3>Each user's needs are different</h3>
                      <p>Not every user is the same. They work at different times, have different uptime requirements, and can tolerate risk differently. In an increasingly global, remote-friendly workforce, users demand solutions that work on their schedule.</p>
                    </div>
                  </li>
                  <li>
                    <div className='content'>
                      <h3>Scheduling patches is a bottleneck</h3>
                      <p>We’ve heard from hundreds of SysAdmins that scheduling and coordinating patches slows down the time to remediate. CAB meetings run longer than they need to and maintenance window season? Let’s just say they’re not making it home for dinner...</p>
                    </div>
                  </li>
                  <li>
                    <div className='content'>
                      <h3>Organizations adapt and scale, so should their IT policies</h3>
                      <p>Wowza...you went from 100 employees to 5000! What worked to keep the ship running has changed and as your infrastructure becomes more complex, your networks becomes larger and more diverse how you handle patches and changes needs to adapt too.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </li>
            <li id='img'>
              <img src='static/logo/ff_logo.png' alt='Logo' />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

