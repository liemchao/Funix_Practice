import { useRef, useState } from 'react';
import styles from './AddMovie.module.css';

function AddMovie(props) {

    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const titleInput = useRef()
    const openingTextInput = useRef()
    const releaseDateInput = useRef()

    const parseDate = (text, warning) => {
        const pattern = /^([0-2][0-9]|(3)[0-1])\/((0)[1-9]|(1)[0-2])\/\d{4}$/;
        if (pattern.test(text)) {
            return true;
        }
        return false;
    }

    const checkEmptyText = (text, warning) => {
        if (text.trim()) {
            return true;
        }
        return false;
    }

    const validateInput = (e) => {
        e.preventDefault();
        const titleValue = titleInput.current.value;
        const openingTextValue = openingTextInput.current.value;
        const releaseDateValue = releaseDateInput.current.value;

        if (!checkEmptyText(titleValue)) {
            setErrorMessage('Please enter all field');
            setIsError(true);

        } else if (!checkEmptyText(openingTextValue)) {
            setErrorMessage('Please enter all field');
            setIsError(true);

        } else if (!checkEmptyText(releaseDateValue)) {
            setErrorMessage('Please enter all field');
            setIsError(true);

        } else if (!parseDate(releaseDateValue)) {
            setErrorMessage('You must be enter with format! (dd/mm/yyyy) or day not valid');
            setIsError(true);

        } else {
            props.createAMovie({
                title: titleValue,
                openingText: openingTextValue,
                releaseDate: releaseDateValue
            })
            setIsError(false);
            titleInput.current.value = '';
            openingTextInput.current.value = '';
            releaseDateInput.current.value = '';
        }
    }

    return (
        <form onSubmit={validateInput} className={`${styles['control']}`}>
            <div className={`${isError ? styles['error'] : styles['d-none']}`}>
                <p className={`${styles['icon-error']}`}>!</p>
                <p className={`${styles['msg-error']}`}>{errorMessage}</p>
            </div>
            <label>Title</label>
            <input ref={titleInput} placeholder='Title' />
            <label>Opening Text</label>
            <textarea ref={openingTextInput}></textarea>
            <label>Release Date</label>
            <input ref={releaseDateInput} placeholder='dd/mm/yyyy' />
            {props.children}
        </form>
    );
}

export default AddMovie;