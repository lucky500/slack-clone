import React from 'react';
import PropTypes from 'prop-types';

export default class ChannelForm extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    const node = this.refs.channel;
    const channelName = node.value;
    this.props.addChannel(channelName);
    node.value = '';
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}
        <input
          type="text"
          ref="channel"
        </input>
      </form>
    )
  }
}

ChannelForm.PropTypes = {
  addChannel: PropTypes.func.isRequired;
}