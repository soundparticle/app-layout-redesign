import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/amplifier.logo.png';
import styles from './Header.css';

class Header extends Component {

  render() {

    return (

      <header className={styles.header}>
        <div className="logo"><img src={logo}/>
          <h1>Notable Amps of World</h1>
        </div> 
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/amps">Amps</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li> 
        </nav>
      </header> 
    );
  }
}
export default Header;