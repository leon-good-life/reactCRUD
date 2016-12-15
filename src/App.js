import React, { Component } from 'react';
import Grid from './grid/Grid';
import { dataArr } from './dataArr';
import CreateNewContact from './contact-form/CreateNewContact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid data={dataArr} hiddenColumns={['id']} />
        <CreateNewContact />
      </div>
    );
  }
}

export default App;
