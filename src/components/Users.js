import React, { Component } from 'react';

class Users extends Component {
  render() {
    const {greetingMessage,
      match: {params: {id}}} = this.props
    if(id) {
      return (
        <div>
          <h2>Users</h2>
          <p>
             {`${greetingMessage} Id ${id}`}, My awesome Users component
          </p>
        </div>
      );
  
    }
    return (
      <div>
        <h2>Users</h2>
        <p>
           All Users Component.
        </p>
      </div>
    );
  }
};

export default Users;
