import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import AddItem  from './list.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 className="center">Let's Find Recipes by Ingredients</h3>
        <AddItem />
      </div>
    );
  }
}

export default App;
