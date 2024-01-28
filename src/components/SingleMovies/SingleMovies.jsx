
import { useParams } from 'react-router-dom';

// import styles from './single-movies.module.css';

const SingleMovies = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <img src="#" alt="" />
            <h2>Title</h2>
            <p></p>
            <h3>Overview</h3>
            <p></p>
            <h3>Genres</h3>
            <p></p>
    </div>
)
}

export default SingleMovies;
