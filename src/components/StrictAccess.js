import React from 'react';
import { Redirect } from 'react-router-dom';

export default class StrictAcess extends React.Component {
  render(){
    
    const { username, password } = this.props.user;
    const hasAcess = (username === 'joao' && password === 1234);

    if (!hasAcess) {
      alert('Access denied');
      return <Redirect to="/" />
    }

    return (
      <p>Welcome, {username}!</p>
    );
  }
}
