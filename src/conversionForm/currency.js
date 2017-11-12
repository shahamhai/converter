import React, { Component } from 'react';

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

    return <div>
      title <br/>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="ILS">ILS</option>
      </select>
    </div> ;
  }
}
