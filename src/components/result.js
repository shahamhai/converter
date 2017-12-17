import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject('ConverterStore') @observer
export default class result extends Component {


  render(){
    const {ConverterStore} = this.props;
    return (
      <div>
      {ConverterStore.convertedValue} {ConverterStore.destCurr}
    </div>
  );
  }
}
