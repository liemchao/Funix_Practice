import Card from "../Card/Card";
import ReactDOM from "react-dom";
import styles from './ErrorModal.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../Button/Button";

function ErrorModal(props) {

    const renderCard = () => {
        return <Card className="position-relative pb-1">
            <h4 className={`${styles['error-title']} text-light p-3`}>Invalid input</h4>
            <p className={`ps-2 pt-3 pb-5 ps-3 pe-3 `}>{props.messageError}</p>
            <div className={`position-absolute mb-2 me-2 ${styles['error-okay__button']}`}>
                <Button onClick={props.onclick}>Okay</Button>
            </div>
        </Card>
    }

    return (
        ReactDOM.createPortal(<div className={`${styles['error-modal']}`} >
            {renderCard()};
        </div>, document.getElementById('popup'))

    );
}

export default ErrorModal;