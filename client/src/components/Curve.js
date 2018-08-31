import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Curve.module.css';

const viewbox = '0 0 100 100';

const shape = `
  M 0 0
  L 100 0
  L 100 5
  L 80 5
  C 50 5, 60 100, 30 100
  L 0 100
  z
`;

class Curve extends Component {
  state = {

  };

  render() {
    return (
      <svg
        className={styles['container']}
        viewBox={viewbox}
        preserveAspectRatio='none'
      >
        <path d={shape} fill='#282c34'/>
      </svg>
    );
  }
}

export default Curve;