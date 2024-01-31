import { useLocation, Link } from "react-router-dom";
import styles from './movie-list-elements.module.css';


const MovieListElements = ({ movies }) => {
  const location = useLocation();
 

  const elements = movies.map(({ id, title, original_name }) => (
    <li key={id} className={styles.item}>
      <Link
        className={styles.title}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {original_name || title}
      </Link>
    </li>
  ));
  
  return (
    <div>
      <ol className={styles.list}>{elements}</ol>
    </div>
  );
};
export default MovieListElements;