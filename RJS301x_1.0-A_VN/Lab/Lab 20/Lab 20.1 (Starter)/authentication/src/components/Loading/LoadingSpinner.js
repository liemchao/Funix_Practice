import classes from './LoadingSpinner.module.css';
import ReactDOM from 'react-dom';
const LoadingSpinner = () => {


  const renderLoading = () => {
    return <div className={classes['wrapper-spinner']}>
      <div className={classes.spinner}></div>
    </div>
  }
  return ReactDOM.createPortal(renderLoading(), document.getElementById("popup-loading"))
}

export default LoadingSpinner;
