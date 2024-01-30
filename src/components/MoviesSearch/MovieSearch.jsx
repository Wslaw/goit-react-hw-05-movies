// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import styles from './movie-search.module.css';

// class MovieSearch extends Component {

//     searchMovies = nanoid();
//     render() {
//         const { searchMovies } = this;
//     return (
//       <form className={styles.formGroup}>
//         <div className={styles.group}>
//           <label htmlFor={searchMovies} className={styles.label}>
//             Searching movies
//           </label>
//           <input
//             id={searchMovies}
//             className={styles.input}
//             placeholder="Find movie"
//             type="text"
//           />
//           <button className={styles.btn} type="submit">
//             Search
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

// export default MovieSearch;


// ****************************************************************
import { useState, useEffect } from 'react';
import { getSearchMovies } from 'api/api';
import styles from './movie-search.module.css'

const MovieSearch = ({ setItemMovie }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setResults(search);
    setSearch('');
  };

  useEffect(() => {
    if (results === '') return;

    const getList = async () => {
      try {
        const { data } = await getSearchMovies(results);
        setItemMovie(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getList();
  }, [results, setItemMovie]);

  return (
    <main>
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      <form className={styles.group} onSubmit={handleSubmit}>
        <label htmlFor="search" className={styles.label}>
          Let's find movies{' '}
        </label>
        <input
          className={styles.input}
          id="search"
          name="search"
          value={search}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          required
        />
        <button className={styles.btn} type="submit">
          <span>Search</span>
        </button>
      </form>
    </main>
  );
};

export default MovieSearch;
