import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

function Cart(props) {

    const { items, totalAmount } = useContext(CartContext);

    const renderCartItem = (items) => {
        return items.map((item) => {
            return <CartItem key={item.id} item={item} />
        })
    }


    return (
        <div className={`${styles['cart-items']}`}>
            {renderCartItem(items)}
            <div className={`${styles['total']}`}>
                <h4>Total Amount</h4>
                <span>${totalAmount}</span>
            </div>
            <div className={`${styles['actions']}`}>
                <button onClick={props.onclick} className={`${styles['button--alt']}`}>Close</button>
                <button>Order</button>
            </div>
        </div>
    );
}

export default Cart;