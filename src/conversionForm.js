import React, { Component } from 'react';

import Amount from './conversionForm/amount.js';
import Currency from './conversionForm/currency.js';

export default class ConversionForm extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <form>
      <Currency key="input" title="from" />
      <Currency key="output" title="to" />
      <Amount />
    </form> ;
  }
}
