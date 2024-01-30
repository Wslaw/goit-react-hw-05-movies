import { Component } from 'react';

import styles from './movie-search.module.css';

class MovieSearch extends Component {
  render() {
    return (
      <form className={styles.formGroup}>
        <div className={styles.group}>
          <label htmlFor="search-movies" className={styles.label}>
            Searching movies
          </label>
          <input
            id="search-movies"
            className={styles.input}
            placeholder="Find movie"
            type="text"
          />
          <button className={styles.btn} type="submit">
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default MovieSearch;
