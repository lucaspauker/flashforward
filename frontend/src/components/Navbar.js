import React from 'react';
import './Navbar.scss';

//import { Authenticator } from '@aws-amplify/ui-react';

export class Navbar extends React.Component {
  render() {
    return (
      <div className='nav'>
        <ul>
          <li><b>FlashForward.ai</b></li>
          <li><a href='/'>Home</a></li>
          <li><a href='#contact'>Contact</a></li>
          {/*<li>
            <Authenticator>
              {({ signOut, user }) => (
                <div>
                  Hey {user.username}!
                  <button onClick={signOut}>Sign out</button>
                </div>
              )}
            </Authenticator>
          </li>*/}
        </ul>
      </div>
    );
  }
}

