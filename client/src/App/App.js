import React, { Component } from 'react';
import './App.css';

import Curve from './../components/Curve';


class App extends Component {

  render() {
    return (
      <div className="App">

        <header>
          <Curve />
        </header>

        <div className='content'>
          <div className='card'/>
        </div>

      </div>
    );
  }
}

export default App;
