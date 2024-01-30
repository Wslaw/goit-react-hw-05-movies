import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingMovies } from 'api/api';

import styles from './movies-list.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const {data} = await getTrendingMovies();
        // console.log(data)
        setMovies(data?.results ? data.results : []);
        // console.log("What is this: ",data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
 
  const elements = movies.map(({ id, title, original_name }) => (
    <li key={id} className={styles.item}>
      <Link to={`/movies/${id}`} className={styles.title}>
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

export default Movies;
