import MainMenu from "components/MainMenu/MainMenu";
import styles from './shared-layout.module.css'
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    
    return (
        <div className={styles.container}>
            <MainMenu />
            <Outlet />
        </div>
    )
}

export default SharedLayout;
