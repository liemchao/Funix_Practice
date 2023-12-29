import styles from './LoadingModal.module.css';
// import ReactDOM from 'react-dom';

function Loading() {
    return (
        <div className={`${styles['loader']}`}>
            <div className={`${styles['loading']}`}></div>
        </div>
    )
}

export default Loading;