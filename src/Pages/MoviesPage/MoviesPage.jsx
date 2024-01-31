import MovieSearch from 'components/MoviesSearch/MovieSearch';
import styles from './movies-page.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [itemMovie, setItemMovie] = useState([]);
  

  const renderMovieList = () => {
    return itemMovie.map(({ title, id }) => {
      return (
        <li className={styles.item} key={id}>
          <Link className={styles.title} to={`${id}`}>{title}</Link>
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
