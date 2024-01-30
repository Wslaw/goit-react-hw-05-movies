
import { useState, useEffect, useRef } from 'react';
import { getSearchMovies } from 'api/api';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import styles from './movie-search.module.css'

const MovieSearch = ({ setItemMovie }) => {
//   const [search, setSearch] = useState('');
  const [results, setResults] = useState('');
  const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search");
    const inputRef = useRef(null);

  const handleChange = ({ target }) => {
    const { value } = target;
    //   setSearch(value);
      setSearchParams({...Object.fromEntries(searchParams), search:value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    setResults(search);  
      inputRef.current.value = '';   
      
  };

  useEffect(() => {
    if (results === '') return;

    const getMoviesList = async () => {
      try {
        const { data } = await getSearchMovies(results);
        setItemMovie(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMoviesList();
  }, [results, setItemMovie]);
const searchId = useMemo(() => nanoid(), []);
  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      <form className={styles.group} onSubmit={handleSubmit}>
        <label htmlFor={searchId} className={styles.label}>
          Let's find movies{' '}
        </label>
        <input
          ref={inputRef}
          className={styles.input}
          id={searchId}
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
    </div>
  );
};

export default MovieSearch;
