import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject('ConverterStore') @observer
export default class Currency extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const {ConverterStore} = this.props;
    const {title} = this.props;
    switch (title) {
      case 'from':
        ConverterStore.setSrc(event.target.value);
        break;
      case 'to':
        ConverterStore.setDest(event.target.value);
        break;
      default:

    }
  }

  render(){
    const {ConverterStore} = this.props;
    const currencyOptions = ConverterStore.currencies.map((currency, index) => <option value={index} key={currency.name}>{currency.name}</option>);
    return (
      <div className="">
        <div className = "row" > {this.props.title} </div>
        <div className="row">
          <select onChange={this.handleChange}>
            {currencyOptions}
          </select>
        </div>
      </div>) ;
  }
}
