import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserList from './UserList';
import UserForm from './UserForm';

class UserSection extends Component {

  render(){
    return(
      <div className="support panel panel-primary">
        <div className="panel-heading">
          <strong>Users</strong>
        </div>
        <div className="panel-body channels">
          <UserList {...this.props} />
          <UserForm {...this.props} />
        </div>
      </div>
    )
  }
}

UserSection.propTypes = {
  user: PropTypes.array.isRequired,
  setUser: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  activeUser: PropTypes.object
}

export default UserSection;