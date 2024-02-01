import { Link, useLocation } from 'react-router-dom';
import styles from './movie-list-elements.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=300x240';

const MovieListElements = ({ movies }) => {
  const location = useLocation();


  const elements = movies.map(({ id, title, original_name, poster_path }) => (
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
  ));

  return (
    <div>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};
export default MovieListElements;
