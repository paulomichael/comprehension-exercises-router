import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route 
          exact path="/users/"
          render={(props) => <Users {...props} greetingMessage={greeting}/>}
        />
        <Route 
          exact path="/users/:id"
          render={(props) => <Users {...props} greetingMessage={greeting}/>}
        />

      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
