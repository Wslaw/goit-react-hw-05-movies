import Posts from 'components/MoviesList/MoviesList';

import styles from './home-page.module.css';

const HomePage = () => {
    
    return (
        <>
            <h2 className={styles.text}>Trending today</h2>
            <Posts/>
        </>
    )
}

export default HomePage;
