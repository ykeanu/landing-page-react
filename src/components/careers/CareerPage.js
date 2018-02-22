import React, { Component } from 'react';
import logo from '../../images/logo-head.svg';
import '../../styles/CareerPage.css';

class CareerPage extends Component {
  constructor() {
    super();
  }

  // Life Cycle Methods

  // Helper Functions

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      // Header
      <div>
        <div className="main-header">
          <img src={logo} />
          
        </div>
      </div>

      

      // Jumbotron

      // Our Culture

      // Dave Perks

      // Open Position
    );
  }
}

export default CareerPage;
