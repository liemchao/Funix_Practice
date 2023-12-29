import { useCallback, useEffect, useContext } from 'react';
import useInput from '../../hook/useInput';
import styles from './OrderForm.module.css';
import CartContext from '../../store/cart-context';

function OrderForm(props) {

    const { removeAllItem } = useContext(CartContext);
    const checkEmpty = useCallback((value) => {
        return value.trim() ? true : false;

    }, [])

    const checkPostCode = (value) => {
        return value.length >= 5 ? true : false
    }

    const { hasError: hasErrorName, inputValue: inputValueName, isTouched: isTouchedName, reset: resetName, onChangeHandler: onChangeName, onBlurHandler: onBlurName } = useInput(checkEmpty);
    const { hasError: hasErrorStreet, inputValue: inputValueStreet, isTouched: isTouchedStreet, reset: resetStreet, onChangeHandler: onChangeStreet, onBlurHandler: onBlurStreet } = useInput(checkEmpty);
    const { hasError: hasErrorPostalCode, inputValue: inputValuePostalCode, isTouched: isTouchedPostalCode, reset: resetPostalCode, onChangeHandler: onChangePostalCode, onBlurHandler: onBlurPostalCode } = useInput(checkPostCode);
    const { hasError: hasErrorCity, inputValue: inputValueCity, isTouched: isTouchedCity, reset: resetCity, onChangeHandler: onChangeCity, onBlurHandler: onBlurCity } = useInput(checkEmpty);


    let isSubmitValidate = !hasErrorName && !hasErrorStreet && !hasErrorPostalCode && !hasErrorCity;

    if (isTouchedName === false || isTouchedStreet === false || isTouchedPostalCode === false || isTouchedCity === false) {
        isSubmitValidate = false;
    }

    useEffect(() => {
        props.setIsDisable(!isSubmitValidate);
    }, [isSubmitValidate, props]);

    const submitFormHandler = (e) => {
        e.preventDefault();
        resetName();
        resetStreet();
        resetPostalCode();
        resetCity();
        removeAllItem();
        props.setIsDisplayModal(false)
        props.setIsDisplayOrderForm(false)
        alert("Order Successfully!")
    }

    return (
        <form onSubmit={submitFormHandler} className={`${styles['action-form']}`}>
            <div className={`${styles['form-control']}`}>
                <div className={`${styles['form-group']}`}>
                    <div className={`${styles['form-input']}`}>
                        <label>Your Name</label>
                        <input value={inputValueName} onChange={onChangeName} onBlur={onBlurName} />
                    </div>
                    <div className={`${styles['error']}`}>
                        {hasErrorName ? 'Please enter your Name ' : ''}
                    </div>
                </div>
                <div className={`${styles['form-group']}`}>
                    <div className={`${styles['form-input']}`}>
                        <label>Street</label>
                        <input value={inputValueStreet} onChange={onChangeStreet} onBlur={onBlurStreet} />
                    </div>
                    <div className={`${styles['error']}`}>
                        {hasErrorStreet ? 'Please enter your street ' : ''}
                    </div>
                </div>

                <div className={`${styles['form-group']}`}>
                    <div className={`${styles['form-input']}`}>
                        <label>Postal Code</label>
                        <input value={inputValuePostalCode} onChange={onChangePostalCode} onBlur={onBlurPostalCode} />
                    </div>
                    <div className={`${styles['error']}`}>
                        {hasErrorPostalCode ? 'Post code must than five character' : ''}
                    </div>
                </div>
                <div className={`${styles['form-group']}`}>
                    <div className={`${styles['form-input']}`}>
                        <label>City</label>
                        <input value={inputValueCity} onChange={onChangeCity} onBlur={onBlurCity} />
                    </div>
                    <div className={`${styles['error']}`}>
                        {hasErrorCity ? 'Please enter your City ' : ''}
                    </div>
                </div>
            </div>
            {props.children}
        </form>
    );
}

export default OrderForm;