import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
function Modal(props) {

    const renderModal = () => {
        return <div className={`${styles['backdrop']} ${props.isDisplay}`}>
            <div className={`${styles['modal']}`}>
                {props.children}
            </div>
        </div>
    }

    return ReactDOM.createPortal(renderModal(), document.getElementById('modal'))
}

export default Modal;