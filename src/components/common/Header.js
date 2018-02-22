import React, { Component } from 'react';
import logo from './images'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
