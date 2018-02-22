import React, { Component } from 'react';
import logo from '../images/logo.svg';

// Components
import CareerPage from './careers/CareerPage';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CareerPage />
      </div>
    );
  }
}

export default App;
