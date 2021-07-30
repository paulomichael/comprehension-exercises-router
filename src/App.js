import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    const greeting = 'Good Morning'
    return (
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/about"> About </Link> </li>
          <li><Link to="/users"> Users </Link></li>
        </ul>
      </nav>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route 
          path="/users" 
          render={() => <Users greetingMessage={greeting}/>}/>
      </BrowserRouter>
    );
  }
}

export default App;
