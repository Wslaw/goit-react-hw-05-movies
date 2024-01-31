import { Link, useLocation } from 'react-router-dom';
import styles from './movie-list-elements.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';


const MovieListElements = ({ movies }) => {
  const location = useLocation();


  // console.log(movies);
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
            src={poster_path ? BASE_URL + poster_path : ''}
            alt={title}
          />

          {original_name || title}
        </Link>
      </div>
    </li>
  ));

  return (
    <div>
      <ol className={styles.list}>{elements}</ol>
    </div>
  );
};
export default MovieListElements;
