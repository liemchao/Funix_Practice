import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
function PopupMovieDetail(props) {

    const renderPopup = () => {
        return <>
            {props.children}
        </>
    }

    return (
        ReactDOM.createPortal(renderPopup(), document.getElementById('popup-detail'))
    );
}

export default PopupMovieDetail;