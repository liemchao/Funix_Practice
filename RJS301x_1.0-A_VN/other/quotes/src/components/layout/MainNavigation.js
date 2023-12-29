import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './MainNavigation.module.css'

function MainNavigation(props) {
    return (
        <>
            <div className={`${styles['header']}`}>
                <div className={`${styles['logo']}`}>
                    <Link to='/'>Great Quotes</Link>
                </div>
                <div className={`${styles['nav']}`}>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => {
                                    return isActive ? styles['active'] : undefined
                                }}
                                end
                            >
                                All Quotes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='quotes/create'
                                className={({ isActive }) => {
                                    return isActive ? styles['active'] : undefined
                                }}
                                end
                            >
                                Add a Quotes
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <Outlet /> */}
            {props.children}
        </>

    );
}

export default MainNavigation;