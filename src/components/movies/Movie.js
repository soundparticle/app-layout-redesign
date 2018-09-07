import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './movie.css';
import logo from '../../assets/logo.png';

export default class Movie extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  render() {
    const { movie } = this.props;
    const { Title, Year, Poster, imdbID } = movie;
    
    return (
      <li className={styles.movie}>
        <Link to={`/movies/${imdbID}`}>
          {Poster !== 'N/A'
            ? <img src={Poster}/>
            : <img src={logo}/>}
          <p><strong>{Title}</strong> ({Year})</p>
        </Link>
      </li>
    );
  }
}