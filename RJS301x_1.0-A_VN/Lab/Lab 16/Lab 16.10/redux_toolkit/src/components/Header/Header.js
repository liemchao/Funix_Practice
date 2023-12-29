import { useSelector, useDispatch } from 'react-redux';
import styles from './Header.module.css';
import { authActions } from '../store/slice/AuthSlice';


function Header() {

    const { isLogin } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authActions.logout())
    }


    return (
        <div className={`${styles['header']}`}>
            <h1>Redux Auth</h1>
            {isLogin && <ul>
                <li>
                    <a href='#'>My Products</a>
                </li>
                <li>
                    <a href='#'>My Sales</a>
                </li>
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>}
        </div>
    );
}

export default Header;