import React, { Component } from 'react';

export default class Amount extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <div>
      amount of money to convert: <br/>
      <input type="number" inputmode="numerinc"/>
    </div> ;
  }
}
