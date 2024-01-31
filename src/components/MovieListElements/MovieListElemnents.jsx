import { Link, useLocation } from 'react-router-dom';
import styles from './movie-list-elements.module.css';



const MovieListElements = ({ movies }) => {
  const location = useLocation();

const handleItemClick = id => {
  // Получаем URL для перехода
  const url = `/movies/${id}`;
  // Переходим на новую страницу
  window.location.href = url;
};


  console.log(movies);
  const elements = movies.map(({ id, title, original_name, poster_path }) => (
    <li key={id} className={styles.item}>
      <div className={styles.itemWrap} onClick={()=>handleItemClick(id)}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />

        <Link
          className={styles.title}
          to={`/movies/${id}`}
          state={{ from: location }}
        >
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
