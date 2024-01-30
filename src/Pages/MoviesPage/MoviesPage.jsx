import MovieSearch from 'components/MoviesSearch/MovieSearch';
import styles from './movies-page.module.css';

const MoviesPage = () => {
  return (
    <div className={styles.back}>
      {/* <h2 className={styles.text}>Search page</h2> */}
      <MovieSearch />
    </div>
  );
};

export default MoviesPage;
