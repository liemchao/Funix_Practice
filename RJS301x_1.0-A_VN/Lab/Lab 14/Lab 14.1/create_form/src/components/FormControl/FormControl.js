import { useCallback } from 'react';
import useInput from '../../hook/use-input';
import styles from './FormControl.module.css';
function FormControl() {

    const validateInputName = useCallback((inputName) => {
        return inputName.trim() ? true : false;
    }, [])

    const validateInputEmail = useCallback((inputEmail) => {
        const pattern = /^[\w]+(@[a-zA-z]+\.)[a-zA-z]+$/;
        return pattern.test(inputEmail);
    }, [])

    const {
        hasError: hasErrorName,
        isTouched: isTouchedName,
        inputValue: inputValueName,
        onChangeInputHandler: onChangeInputName,
        onBlurInputHandler: onBlurInputName,
        resetInput: resetInputName } = useInput(validateInputName);

    const {
        hasError: hasErrorEmail,
        isTouched: isTouchedEmail,
        inputValue: inputValueEmail,
        onChangeInputHandler: onChangeInputEmail,
        onBlurInputHandler: onBlurInputEmail,
        resetInput: resetInputEmail } = useInput(validateInputEmail);

    let onSubmitValidate = !hasErrorEmail && !hasErrorName;

    if (isTouchedEmail === false && isTouchedName === false) {
        onSubmitValidate = false;
    }

    const onsubmitHandler = (e) => {
        e.preventDefault();
        resetInputName();
        resetInputEmail();
        console.log(inputValueName);
        console.log(inputValueEmail);
    }

    return (
        <form onSubmit={onsubmitHandler}>
            <div className={`${styles['control-group']}`}>
                <div className={`${styles['form-control']}`}>
                    <label>Your Name</label>
                    <div className={`${hasErrorName ? styles['invalid'] : ''}`} >
                        <input onBlur={onBlurInputName} onChange={onChangeInputName} value={inputValueName} />
                    </div>
                    {hasErrorName ? <p className={`${styles['error-text']}`}>Name must not be empty</p> : <></>}
                </div>
                <div className={`${styles['form-control']}`}>
                    <label>Your E-Mail</label>
                    <div className={`${hasErrorEmail ? styles['invalid'] : ''}`} >
                        <input onBlur={onBlurInputEmail} onChange={onChangeInputEmail} value={inputValueEmail} />
                    </div>
                    {hasErrorEmail ? <p className={`${styles['error-text']}`}>Please enter a valid email</p> : <></>}
                </div>
            </div>
            <div className={`${styles['form-actions']}`}>
                <button type='submit' disabled={!onSubmitValidate}>Submit</button>
            </div>
        </form>
    );
}

export default FormControl;