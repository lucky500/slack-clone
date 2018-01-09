import React from 'react';
import PropTypes from 'prop-types';
import User from './user';

class UserList extends React.Component {
  render(){
    return(
      <ul>{
        this.props.users.map(u => {
          return <User
            user = {u}
            key = {u.id}
            {...this.props}
          />
        })
      }</ul>
    )
  }
}

User.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList;