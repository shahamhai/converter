import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject('ConverterStore') @observer
export default class Amount extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    const {ConverterStore} = this.props;
    ConverterStore.setAmount(e.target.value);
  }

  render(){
    return (
      <div className="row">
        <div>amount of money to convert:</div>
        <input type="number" inputMode="numeric" onChange={this.handleChange} defaultValue="1" />
      </div>) ;
  }
}
