import { useState } from "react";

const useInput = (validateCallback) => {
    const [isTouched, setIsTouched] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const isValidate = validateCallback(inputValue);
    const hasError = !isValidate && isTouched;

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const onBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setIsTouched(false);
        setInputValue('');
    }

    return {
        hasError,
        inputValue,
        isTouched,
        reset,
        onChangeHandler,
        onBlurHandler,
    }
}

export default useInput;