import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ConversionForm from './conversionForm.js';
import Result from './result.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Currency Converter</h1>
        </header>
        <ConversionForm />
        <Result />
      </div>
    );
  }
}

export default App;
