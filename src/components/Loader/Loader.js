import { Component } from 'react';
import { BallTriangle } from 'react-loader-spinner';

import './Loader.css';

export default class Spinner extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <BallTriangle
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
          visible={true}
        />
      </div>
    );
  }
}
