import SingleMovies from 'components/SingleMovies/SingleMovies';
import { getReviews } from 'api/api';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

// import styles from './review-page.module.css';

const ReviewsPage = () => {
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getReviews(movieId);
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

export default ReviewsPage;
