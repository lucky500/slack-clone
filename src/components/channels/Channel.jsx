import React, { Component } from 'react';
import PropTypes form 'prop-types';

class Channel extends Component {
  handleClick(e){
    e.preventDefault();
    const {setChannel, channel} = this.props;
    setChannel(channel);
  }

  render(){
    const {channel} = this.props;
    return(
      <li>
        <a onClick={this.handleClick.bind(this)}>
          {channel.name}
        </a>
      </li>
    )
  }
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired, 
  setChannel: PropTypes.func.isRequired
}

export default Channel;