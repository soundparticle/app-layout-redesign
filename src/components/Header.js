import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Header.css';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>  

        <section className="header-container">
          <div className="logo"><img src={logo}/>
            <h1>My Favorite Amps</h1>
          </div> 
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/amps">Amps</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
            </ul>
          </nav>
        </section> 
        
        {/* <section className="search-container">
          <Route component={Search}/>
        </section> */}
      </div>
    );
  }
}
export default Header;