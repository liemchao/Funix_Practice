import styles from './NotFound.module.css'
function NotFound() {
    return (
        <div className={`${styles['error']}`}>
            Page not found
        </div>
    );
}

export default NotFound;