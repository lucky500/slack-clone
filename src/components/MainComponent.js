import React, { Component } from 'react';

export default class MainComponent extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('I was clicked');
  }

  render(){
    return(
      <div className="test" onClick={this.handleClick} >
        {this.props.name}
      </div>
    )
  }
}