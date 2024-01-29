import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { getMoviesById } from '../../api/searchMovies';
import { getMoviesById } from 'api/api';

import styles from './single-movies.module.css';

const SingleMovies = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
  }, [id]);

  console.log('id= ', id);
  const movieId = id.slice(1);
  console.log('movieId= ', movieId);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMoviesById(movieId);
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
      {loading && <p>...Loading</p>}
      {error && <p>Error:{error}</p>}
      <button
        onClick={() => {
          navigate(-1);
        }}
        type="button"
        className={styles.btn}
      >
        Go Back
      </button>
      {movies ? (
        <div className={styles.wrap}>
          {movies && movies.backdrop_path && (
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
              alt="Backdrop"
              width="300px"
              height="auto"
            />
          )}
          <div>
            <h2 className={styles.article}>
              {movies.title} {'('}
              {movies.release_date.split('-')[0]}
              {')'}
            </h2>
            <span>User Score: {Math.floor(movies.vote_average * 10)}%</span>
            <h3 className={styles.title}>Overview</h3>
            <p>{movies.overview}</p>
            <h3 className={styles.title}>Genres</h3>
            {/* <div className={styles.genres}> */}
            <ul className={styles.list}>
              {movies.genres.map(genre => (
                <li className={styles.item} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
            {/* </div> */}
          </div>
        </div>
      ) : (
        <p>...Loading</p>
      )}
      <div className={styles.additional}>
        <h3>Additional information</h3>

        <ul className={styles.add}>
          <Link
            className={`${styles.link} ${styles.cast}`}
            to={`/movies/${movieId}/cast`}
          >
            <span>Cast</span>
          </Link>

          <Link
            className={`${styles.link} ${styles.reviews}`}
            to={`/movies/${movieId}/reviews`}
          >
            <span>Reviews</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SingleMovies;
