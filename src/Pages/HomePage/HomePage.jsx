import Movies from 'components/MoviesList/MoviesList';

import styles from './home-page.module.css';

const HomePage = () => {
    
    return (
        <div className={styles.back}>
            <h2 className={styles.text}>Trending today</h2>
            <Movies/>
        </div>
    )
}

export default HomePage;
