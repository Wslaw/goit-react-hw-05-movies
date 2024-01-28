import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import {getMoviesById} from '../../api/searchMovies';

// import styles from './single-movies.module.css';

const SingleMovies = () => {
  const [movies, setMovies] = useState();
    const { id } = useParams();
    const movieId = id.slice(1);
    console.log("movieId = ",movieId);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const { data } = await getMoviesById(movieId);
          setMovies(data);
        } catch (error) {
          setError(error.message);
          // console.error('Error:', error.message);
          // throw error;
        } finally {
          setLoading(false);
        }
      };
      fetchMovies();
    }, [movieId]);

  return (
    <div>
      <img src="#" alt="" />
      <h2>Title</h2>
      <p></p>
      <h3>Overview</h3>
      <p>Cast</p>
      <h3>Genres</h3>
      <p>Reviews</p>
    </div>
  );
};

export default SingleMovies;
