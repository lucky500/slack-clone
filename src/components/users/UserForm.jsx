import React from 'react';
import PropTypes from 'prop-types';

class UserForm extends React.Component {

  handleSubmit(e){
    e.preventDefault();
    const node = this.refs.user;
    const userName = node.value;
    this.props.addUser(userName);
    node.value = '';
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" ref="user" className="form-control" 
            placeholder="Add User" />
        </div>
      </form>
    )
  }
}


UserForm.proptypes = {
  addUser: Proptypes.func.isRequired
}

export default UserForm;