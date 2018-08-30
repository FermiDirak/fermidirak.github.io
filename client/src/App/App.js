import React, { Component } from 'react';
import './App.css';

import Curve from './../components/Curve';


class App extends Component {

  render() {
    return (
      <div className="App">

        <header>
          <svg className='wave' viewBox={viewbox} preserveAspectRatio='none'>
            <path d={curve} fill='#282c34'/>
          </svg>
        </header>

        <div className='content'>
          <div className='card'/>
        </div>

      </div>
    );
  }
}

export default App;
