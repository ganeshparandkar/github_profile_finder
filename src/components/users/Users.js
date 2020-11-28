import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {



  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
};
