
import SingleMovies from '../../components/SingleMovies/SingleMovies';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
// import { getCasts } from 'api/cast';
import { getCasts } from 'api/api';

// import styles from './movie-details-page.module.css';

const CastPage = () => {
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getCasts(movieId);
        console.log('Cast: ', castData);
      } catch (error) {
        console.log('Error fetching cast', error.message);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <SingleMovies />
    </div>
  );
};

export default CastPage;

