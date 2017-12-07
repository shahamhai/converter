import React, { Component } from 'react';

export default class Amount extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="row">
        <div>amount of money to convert:</div>
        <input type="number" inputMode="numeric"/>
      </div>) ;
  }
}
