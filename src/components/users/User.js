import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.Login);
  }
  render() {
    const {
      name,
      // avatar_url,
      // location,
      // bio,
      // blog,
      // login,
      // html_url,
      // followers,
      // following,
      // public_repos,
      // public_gists,
      // hirable,
    } = this.props.user;

    const { loading } = this.props;
    return (
      <div>
        <h1> {name} User </h1>
      </div>
    );
  }
}

export default User;
