import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { id } = this.props.match.params;
    const { greetingsMessage } = this.props
    return (
      <div>
        <h2>User { id }</h2>
        <p> { greetingsMessage }, My awesome Users component </p>
      </div>
    );
  }
};

export default Users;
