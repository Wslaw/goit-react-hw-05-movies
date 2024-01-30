import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { getMovieCredits } from 'api/api';
import styles from './cast-page.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=300x240';


const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const  {data}  = await getMovieCredits(id);
        setCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (!id) return;
    fetchCast();
  }, [id]);

  const elements = cast.map(
    ({ id, character, original_name, profile_path }) => (
      <li className={styles.item} key={id}>
        <img
          className={styles.img}
          src={profile_path ? BASE_URL + profile_path : defaultImg}
          alt="Foto"
        />
        <h4 className={styles.title}>{character}</h4>
        <p className={styles.text}>{original_name}</p>
      </li>
    )
  );

  const isCast = Boolean(cast.length);

  return (
    <div className={styles.back}>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {<h2 className={styles.castTitle}>Cast</h2>}
      {isCast && <ul className={styles.list}>{elements}</ul>}
    </div>
  );
}
export default CastPage;
