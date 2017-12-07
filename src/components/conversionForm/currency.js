import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject('ConverterStore') @observer
export default class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
    const currencyOptions = this.props.ConverterStore.currencies.map(currency => <option value={currency.name}>{currency.name}</option>);
    return (
      <div className="">
        <div className = "row" > title </div>
        <div className="row">
          <select>
            {currencyOptions}
          </select>
        </div>
      </div>) ;
  }
}
