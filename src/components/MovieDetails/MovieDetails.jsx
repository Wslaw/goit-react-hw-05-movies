import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
import { getMoviesById } from 'api/api';

import styles from './movie-details.module.css';

const MovieDetails = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getMoviesById(id);
        setMovies(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [id]);

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
              src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
              alt={movies.original_title}
              // src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
              // alt="Backdrop"
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
            <ul className={styles.list}>
              {movies.genres?.length &&
                movies.genres.map(genre => (
                  <li className={styles.item} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>...Loading</p>
      )}
      <div className={styles.additional}>
        <h3>Additional information</h3>
        <ul className={styles.add}>
          <NavLink className={`${styles.link} ${styles.cast}`} to={`cast`}>
            <span>Cast</span>
          </NavLink>
          <NavLink
            className={`${styles.link} ${styles.reviews}`}
            to={`reviews`}
          >
            <span>Reviews</span>
          </NavLink>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
