import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'api/api';

import styles from './movies-list.module.css';

const MoviesList = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getTrendingMovies();
        console.log(data.results)
        setMovies(data?.results || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const elements = movies.map(({ id, title, original_name }) => (
    <li key={id} className={styles.item}>
      <Link className={styles.title} to={`/movies/${id}`} state={{from:location}} >
        {original_name || title}
      </Link>
    </li>
  ));

  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {Boolean(elements.length) && <ol className={styles.list}>{elements}</ol>}
    </>
  );
};

export default MoviesList;
