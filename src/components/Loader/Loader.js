import { Component } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import s from './Loader.module.css';

export default class Spinner extends Component {
  render() {
    return (
      <div className={s.loaderWrapper}>
        <BallTriangle
          // type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
          visible={true}
          ariaLabel="loading"
        />
      </div>
    );
  }
}
