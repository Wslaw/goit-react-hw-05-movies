import MovieSearch from 'components/MoviesSearch/MovieSearch';
import styles from './movies-page.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MoviesPage = () => {
  const [itemMovie, setItemMovie] = useState([]);
  

  const renderMovieList = () => {
    return itemMovie.map(({ title, id }) => {
      return (
        <li className={styles.item} key={id}>
          <NavLink className={styles.title} to={`${id}`}>{title}</NavLink>
        </li>
      );
    });
  };

  return (
    <main>
      <MovieSearch setItemMovie={setItemMovie} />
      <ol className={styles.list}>
        {itemMovie.length
          ? renderMovieList()
          : null}
      </ol>
      
    </main>
  );
};
export default MoviesPage;
