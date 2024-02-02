import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { getTrendingMovies } from 'api/api';
import MovieListElements from 'components/MovieListElements/MovieListElemnents';

import styles from './movies-list.module.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getTrendingMovies();
        setMovies(data?.results || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <Loader />}
      {Boolean(movies.length) && <MovieListElements movies={movies} />}
    </>
  );
};

export default MoviesList;
