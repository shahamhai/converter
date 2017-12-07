import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {inject, observer} from 'mobx-react';

import ConversionForm from './components/conversionForm.js';
import Result from './components/result.js'

@inject('ConverterStore')
@observer
class App extends Component {

  componentDidMount() {
      this.props.ConverterStore.fetchCurrencies();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Currency Converter</h1>
        </header>
        <div className="container-fluid">
          <ConversionForm />
        </div>
        <div className="container">
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
