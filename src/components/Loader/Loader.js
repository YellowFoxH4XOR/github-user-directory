import logo from '../../git.svg';
import React from 'react';
import './Loader.css';

class Loader extends React.Component {

  render() {
    return (
      <div className="Loader">
        <header className="Loader-header">
          <img src={logo} className="Loader-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Loader;