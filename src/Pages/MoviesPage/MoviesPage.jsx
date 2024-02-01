import MovieSearch from 'components/MoviesSearch/MovieSearch';
import styles from './movies-page.module.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';
 const defaultImg =
   'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=300x240';

const MoviesPage = () => {
  const [itemMovie, setItemMovie] = useState([]);
  const location = useLocation();

  const renderMovieList = () => {
    return itemMovie.map(({ id, title, original_name, poster_path }) => {
      return (
        <li key={id} className={styles.item}>
          <div className={styles.itemWrap}>
            <Link
              className={styles.title}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <img
                className={styles.img}
                src={poster_path ? BASE_URL + poster_path : defaultImg}
                alt={title}
              />

              {original_name || title}
            </Link>
          </div>
        </li>
      );
    });
  };

  return (
    <div className={styles.wrap}>
      <MovieSearch onSubmit={setItemMovie} />
      <ol className={styles.list}>
        {itemMovie.length
          ? renderMovieList()
          : null}
      </ol>
      
    </div>
  );
};
export default MoviesPage;
