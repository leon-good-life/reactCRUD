import React, { Component } from 'react';
import Grid from './grid/Grid';
import { dataArr } from './dataArr';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid data={dataArr} />
      </div>
    );
  }
}

export default App;
