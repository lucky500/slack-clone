import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      channels: []
    };
  }

  addChannel(name){
    let {channels } = this.state;
    channels.push({id: channels.length, name});
    this.setState({channels});
    //TODO send to server
  }

  setChannel(activeChannel){
    this.setState({activeChannel});
    //TODO get channel's message
  }

  render(){
    return (
      <div className="app">
        <div className="nav">
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
