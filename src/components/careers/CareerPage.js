import React, { Component } from 'react';

// Components
import Header from '../common/Header';
import Jumbotron from './Jumbotron';
import Culture from './Culture';
import Perks from './Perks';
import Positions from './Positions';

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
        <Culture />
        <Perks />
        <Positions />
      </div>
    );
  }
}

export default CareerPage;
