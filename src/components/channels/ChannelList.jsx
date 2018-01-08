import React, { Component } from react;
import PropTypes form 'prop-types';
import Channel from './Channel';

class ChannelList extends Component {
  render(){
    return(
      <ul>{
        this.props.channels.map(chan => {
          <Channel 
            channel={chan}
            setChannel={this.props.setChannel}
          />
        })
      }</ul>
    )
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired, 
  setChannel: PropTypes.func.isRequired
}


export default ChannelList;