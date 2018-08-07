import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import AddItem  from './list.js';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 className="center">Ingredients</h3>
        <AddItem />
      </div>
    );
  }
}

export default App;
