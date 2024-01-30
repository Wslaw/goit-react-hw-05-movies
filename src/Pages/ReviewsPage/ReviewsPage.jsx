// import MovieDetails from 'components/MovieDetails/MovieDetails';
import { getMovieReviews } from 'api/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './review-page.module.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieReviews(id);
        console.log('Reviews: ', data);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (!id) return;
    fetchCast();
  }, [id]);

  
  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h4 className={styles.title}>{author}</h4>
      <p>{content}</p>
    </li>
  ));

  const isReview = Boolean(reviews.length);

  return (
    <div className={styles.back}>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {<h2 className={styles.reviewsTitle}>Reviews</h2>}
      {isReview && <ul className={styles.list}>{elements}</ul>}
    </div>
  );
};

export default ReviewsPage;
