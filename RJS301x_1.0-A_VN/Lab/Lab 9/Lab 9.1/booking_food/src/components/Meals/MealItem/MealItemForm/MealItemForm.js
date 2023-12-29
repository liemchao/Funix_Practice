import { useContext, useState } from 'react';
import Input from '../../../UI/Input/Input';
import styles from './MealItemForm.module.css'
import CartContext from '../../../../store/cart-context';
function MealItemForm(props) {
    const cartContext = useContext(CartContext);
    const [inputQuantity, setInputQuantity] = useState("1");

    const checkIsNumberNThanZero = (value) => {
        if (value) {
            if (value.includes('.'))
                return false;
            else {
                const number = parseInt(value)
                if (number && number > 0) {
                    return true;
                }
                return false;
            }
        }
        return false;
    }

    return (
        <div className={`${styles['form']}`}>
            <Input inputState={inputQuantity} setInputState={setInputQuantity} />
            <button onClick={() => {
                if (checkIsNumberNThanZero(inputQuantity)) {
                    cartContext.addItem({
                        id: props.meal.id,
                        name: props.meal.name,
                        price: props.meal.price,
                        amount: parseInt(inputQuantity)
                    });
                    setInputQuantity('1');
                } else {
                    alert("How many people you have? I will ready for you!")
                }
            }}>+ Add</button>
        </div>
    );
}

export default MealItemForm;