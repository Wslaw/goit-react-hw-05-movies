import { useState, useEffect, useMemo, useRef } from 'react';
import { getSearchMovies } from 'api/api';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Loader from 'components/Loader/Loader';

import styles from './movie-search.module.css';

const MovieSearch = ({ onSubmit }) => {
  // const [search, setSearch] = useState('');
  const [results, setResults] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setResults(search);
  }, [search]);


  const handleChange = ({ target }) => {
    const { value } = target;
    // setSearch(value);
    setSearchParams({ search: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setResults(search);
    // setSearchParams({ search });
    // setSearch('');
    // e.target.reset();
    inputRef.current.value = '';
  };

  useEffect(() => {
    if (!results) return;

    const getMoviesList = async () => {
      try {
        const { data } = await getSearchMovies(results);
        onSubmit(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMoviesList();
  }, [results, onSubmit]);
  
  const searchId = useMemo(() => nanoid(), []);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}

      <form className={styles.group} onSubmit={handleSubmit}>
        <label htmlFor={searchId} className={styles.label}>
          Let's find movies{' '}
        </label>
        <input
          className={styles.input}
          id={searchId}
          ref={inputRef}
          name="search"
          value={results}
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
    </div>
  );
};

export default MovieSearch;
