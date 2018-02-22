import React, { Component } from 'react';

// Components
import Header from '../common/Header';
import Jumbotron from './Jumbotron';
// Styles
import '../../styles/index.css';

class CareerPage extends Component {
  constructor() {
    super();
  }

  // Life Cycle Methods

  // Helper Functions

  render() {
    return (
      <div className="CareerPage">
      <Header />
      <Jumbotron />
      {/* // Our Culture */}

      {/* // Dave Perks */}

      {/* // Open Position */}
      </div>
    );
  }
}

export default CareerPage;
