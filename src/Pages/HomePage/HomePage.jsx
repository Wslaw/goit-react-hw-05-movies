import Posts from 'components/Posts/Posts';

import styles from './home-page.module.css';

const HomePage = () => {
    
    return (
        <>
            <h2 className={styles.text}>Home page</h2>
            <Posts/>
        </>
    )
}

export default HomePage;
