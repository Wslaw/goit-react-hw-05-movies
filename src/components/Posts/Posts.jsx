import {useState, useEffect } from "react";

import { getAllMovies } from "../../api/posts";

import styles from "./posts.module.css";

// const Posts = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(()=> {
//         const fetchPosts = async ()=> {
//             try {
//                 setLoading(true);
//                 const {data} = await getAllPosts();
//                 setPosts(data?.length ? data : []);
//             }
//             catch(error) {
//                 setError(error.message);
//             }
//             finally {
//                 setLoading(false);
//             }
//         }

//         fetchPosts();
//     }, []);

//     const elements = posts.map(({ id, title, body }) => (<li key={id} className={styles.item}>
//         <h3>{title}</h3>
//         <p>{body}</p>
//     </li>));

//     return (
//         <>
//             {error && <p className={styles.error}>{error}</p>}
//             {loading && <p>...Loading</p>}
//             {Boolean(elements.length) &&
//                 (<ol className={styles.list}>
//                 {elements}
//             </ol>)}
//         </>
//     )
// }


// export default Posts;
// **************************************************
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getAllMovies();
        setMovies(data?.results ? data.results : []);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  console.log(movies);
  console.log('Number of movies:', movies.length); 

  const elements = movies.map(
    ({
      id,title,
      original_name,
      original_language,
      adult,
      backdrop_path,
      overview,
    }) => (
      <li key={id} className={styles.item}>
        <h3 className={styles.title}>{original_name||title}</h3>
        <p className={styles.text}>Original Language: {original_language}</p>
        <p className={styles.text}>Adult: {adult ? 'Yes' : 'No'}</p>
        <img className={styles.picture} src={backdrop_path} alt={overview} />
      </li>
    )
  );

  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {Boolean(elements.length) && <ol className={styles.list}>{elements}</ol>}
    </>
  );
};

export default Movies;