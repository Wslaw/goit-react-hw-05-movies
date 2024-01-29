import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMoviesById } from '../../api/searchMovies';
// import CastPage from 'Pages/CastPage/CastPage';
// import ReviewsPage from '../../Pages/ReviewsPage/ReviewsPage'

import styles from './single-movies.module.css';

const SingleMovies = () => {
  const [movies, setMovies] = useState();
    const { id } = useParams();
    const movieId = id.slice(1);
    console.log("movieId = ",movieId);
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log(error,loading)

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          setLoading(true);
            const  data  = await getMoviesById(movieId);
            setMovies(data);
            
        } catch (error) {
          setError(error.message);
         
        } finally {
          setLoading(false);
        }
      };
      fetchMovies();
    }, [movieId]);

    return (
      <div>
        {movies ? (
          <div className={styles.wrap}>
            <img
              src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
              alt="Backdrop"
              width="300px"
              height="auto"
            />
            <div>
              <h2>
                {movies.title} {'('}
                {movies.release_date.split('-')[0]}
                {')'}
              </h2>
                        <p>{movies.overview}</p>
                        <span>User Score:{' '}{Math.floor(movies.vote_average*10)}%</span>
              <h3>Genres</h3>
              <ul>
                {movies.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div>
                <h3>Additional information</h3>
                
          <ul className={styles.additional}>
            <Link className={styles.link} to={`/movies/cast/${movieId}`}>
              Cast
            </Link>
            <Link className={styles.link} to={`/movies/reviews/${movieId}`}>
              Reviews
            </Link>
          </ul>
        </div>
      </div>
    );
};

export default SingleMovies;
