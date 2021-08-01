import React, { Component } from 'react';
import { Redirect } from 'react-router';

class StrictAccess extends Component {
  render() {
    const { user, password } = this.props
    if(user === 'joao' && password === '1234') {
      return (
        <p>Welcome { user }!</p>
      );
    }
    alert("Access denied")
    return (
      <Redirect to="/" />
    );
  }
}

export default StrictAccess;