import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

function Layout({ children }) {
    return (
        <div className={`${styles['main']}`}>
            {/* <Outlet /> */}
            {children}
        </div>
    );
}

export default Layout;