import React, { Component } from 'react';

import Amount from './conversionForm/amount.js';
import Currency from './conversionForm/currency.js';

export default class ConversionForm extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <form>
      <div className="input-group">
        <div className="col-sm-6 col-lg-3 offset-lg-3 alert alert-secondary">
          <Currency key="input" title="from" />
          <Amount />
        </div>
        <div className="col-sm-6 col-lg-3 alert alert-secondary">
          <Currency key="output" title="to" />
        </div>
      </div>
    </form> ;
  }
}
