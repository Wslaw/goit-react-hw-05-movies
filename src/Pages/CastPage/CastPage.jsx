// import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { getMovieCredits } from 'api/api';
import styles from './cast-page.module.css';


const BASE_URL = 'https://image.tmdb.org/t/p/w300';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';


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
        // console.log('Cast: ', data);
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
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {isCast && <ul className={styles.list}>{elements}</ul>}
    </>
  );
}
export default CastPage;
