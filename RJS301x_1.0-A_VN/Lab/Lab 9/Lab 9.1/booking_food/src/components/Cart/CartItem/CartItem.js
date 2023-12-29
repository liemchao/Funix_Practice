import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import styles from './CartItem.module.css';


function CartItem({ item }) {

    const { addItem, removeItem } = useContext(CartContext);

    const addItemToCart = () => {
        addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            amount: 1
        })
    }

    const removeItemFromCart = () => {
        removeItem(item.id)
    }

    return (
        <div className={`${styles['cart-item']}`}>
            <div>
                <h2>{item.name}</h2>
                <div className={`${styles['summary']}`}>
                    <span className={`${styles['price']}`}>${item.price}</span>
                    <span className={`${styles['amount']}`}>x {item.amount}</span>
                </div>
            </div>
            <div className={`${styles['actions']}`}>
                <button onClick={removeItemFromCart}>-</button>
                <button onClick={addItemToCart}>+</button>
            </div>
        </div>
    );
}

export default CartItem;