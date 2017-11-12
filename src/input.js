import React from 'react';

import SubTitle from 'sub-title';

export default class Input extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    const title = e.target.value;

  }

  render(){
    return (
      <div>
        <SubTitle title={this.props.title} />
        <input type="number" value={this.state.value} />
      </div>
    );
  }
}
