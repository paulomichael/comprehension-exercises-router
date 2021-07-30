import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';

/* first change for the initial commit */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
