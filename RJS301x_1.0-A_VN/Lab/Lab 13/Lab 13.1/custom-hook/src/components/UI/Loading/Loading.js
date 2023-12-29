import styles from './Loading.module.css';
import ReactDOM from 'react-dom';

function Loading() {
    const renderLoading = () => {
        return (
            <div className={`${styles['loading']}`}>
                <div className={`${styles['loader']}`}></div>
            </div >
        );
    }
    return ReactDOM.createPortal(renderLoading(), document.getElementById('loading'))
}

export default Loading;