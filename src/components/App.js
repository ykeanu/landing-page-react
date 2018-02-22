import React, { Component } from 'react';
import logo from '../images/logo.svg';

//Components
import Header from './common/Header';
import CareerPage from './careers/CareerPage';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CareerPage />
      </div>
    );
  }
}

export default App;
