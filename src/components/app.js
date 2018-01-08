import React, { Component } from 'react';
import MainComponent from './MainComponent'
import ChannelSection from './channels/ChannelSection';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      channels = [];
    };
  }

  render(){
    return (
      <div>
        <ChannelSection
          
        />
        <MainComponent name="I am main component again" />
      </div>
    );
  }
}

export default App;
