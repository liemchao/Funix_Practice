import { useState } from "react";

const useInput = (validateValue) => {
    const [isTouched, setIsTouched] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const valueIsValidate = (validateValue(inputValue));
    const hasError = !valueIsValidate && isTouched;
    const onChangeInputHandler = (e) => {
        setInputValue(e.target.value);
    }

    const onBlurInputHandler = () => {
        setIsTouched(true);
    }

    const hasShowError = () => {
        if (!isTouched) {
            return false;
        }
        else if (isTouched) {
            if (!hasError) {
                return false;
            }
            return true
        }
        return true;
    }

    const resetInput = () => {
        setIsTouched(false);
        setInputValue('');
    }

    return {
        hasError,
        inputValue,
        isTouched,
        onChangeInputHandler,
        onBlurInputHandler,
        hasShowError,
        resetInput,
    }
}

export default useInput;