import React, { Component } from 'react';

class Users extends Component {
  render() {
    const {greetingMessage,
      match: {params: {id}}} = this.props
    console.log(this.props.match.params);
    console.log('console.log');
    if(id) {
      return (
        <div>
          <h2>Users</h2>
          <p>
             {`${greetingMessage} Id ${id}`}, My awesome Users component </p>
        </div>
      );
  
    }
    return (
      <div>
        <h2>Users</h2>
        <p>
           All Users Component. </p>
      </div>
    );
  }
};

export default Users;
