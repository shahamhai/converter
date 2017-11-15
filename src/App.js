import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import ConversionForm from './conversionForm.js';
import Result from './result.js'

class App extends Component {
  constructor(){
    super();
    let currencies;
    const res = axios.get('https://api.fixer.io/latest')
      .then(response => {
        const rates = response.data.rates;
        const names = Object.keys(rates)
        currencies = names.map(currencyName => {return {name: currencyName, rate: null} });
        names.forEach((currencyName, i) => currencies[i].rate = rates[currencyName]);
        currencies.push({name: response.data.base , rate:1})
        currencies.sort((a, b) => {
          return a.name > b.name ? 1 :
            a.name < b.name ? -1 : 0
        });
        console.log(rates['USD']);
        console.log(currencies);
        console.log(Object.keys(rates));
      });


    console.log(currencies);
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
