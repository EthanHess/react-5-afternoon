import React, { Component } from 'react';
import './App.css';
import router from './router'
import { HashRouter } from 'react-router-dom';

//Needs to be wrapped in "HashRouter" somewhere, could also do in index.js

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          { router }
        </HashRouter>
      </div>
    );
  }
}

export default App;