import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <NavLink to="/" className={({ isActive }) => {
                        const activeClass = isActive ? `${styles.active}` : `text-black`
                        return `text-decoration-none font-italic ${activeClass} me-2 text-capitalize`
                    }} end>Home</NavLink>
                    <NavLink to="/shop" className={({ isActive }) => {
                        const activeClass = isActive ? `${styles.active} ` : `text-black`
                        return `text-decoration-none font-italic ${activeClass} text-capitalize`
                    }} end>Shop</NavLink>
                </div>
                <div className={`${styles['logo']} col text-center text-uppercase`}>boutique</div>
                <div className="col d-flex justify-content-end">
                    <NavLink to="/cart" className={({ isActive }) => {
                        const activeClass = isActive ? `${styles.active}` : `text-black`
                        return `text-decoration-none font-italic ${activeClass} me-2 text-capitalize`
                    }}>
                        <FontAwesomeIcon icon={faCartShopping} className="opacity-50" /> Cart
                    </NavLink>
                    <NavLink to="/profile" className={({ isActive }) => {
                        const activeClass = isActive ? `${styles.active}` : `text-black`
                        return `text-decoration-none font-italic ${activeClass} me-2 text-capitalize`
                    }}>
                        <FontAwesomeIcon icon={faUser} className="opacity-50" />TungPT
                    </NavLink>
                    <Link className="">
                        (logout)
                    </Link>
                    <NavLink to="/login" className={({ isActive }) => {
                        const activeClass = isActive ? `${styles.active}` : `text-black`
                        return `text-decoration-none font-italic ${activeClass} me-2 text-capitalize`
                    }}>
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;