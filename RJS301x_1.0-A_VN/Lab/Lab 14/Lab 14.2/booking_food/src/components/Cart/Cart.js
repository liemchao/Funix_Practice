import { useContext, useState, useCallback } from 'react';
import CartContext from '../../store/cart-context';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import OrderForm from '../OrderForm/OrderForm';

function Cart(props) {

    const [isDisplayOrderForm, setIsDisplayOrderForm] = useState(false);
    const { items, totalAmount } = useContext(CartContext);
    const [isDisable, setIsDisable] = useState(false);

    const renderCartItem = useCallback((items) => {
        return items.map((item) => {
            return <CartItem key={item.id} item={item} />
        })
    }, [])

    const showOrderForm = useCallback(() => {
        setIsDisplayOrderForm(true);
    }, [])
    const cancelOrderForm = useCallback(() => {
        setIsDisplayOrderForm(false);
    }, [])

    const checkIsOrderForm = useCallback(() => {
        return isDisplayOrderForm ?
            (<OrderForm setIsDisplayModal={props.setIsDisplayModal} setIsDisplayOrderForm={setIsDisplayOrderForm} setIsDisable={setIsDisable} >
                <div className={`${styles['actions']}`}>
                    <button onClick={cancelOrderForm} className={`${styles['button--alt']}`}>Cancel</button>
                    <button disabled={isDisable}>Confirm</button>
                </div>
            </OrderForm>) :
            (<div className={`${styles['actions']}`}>
                <button onClick={props.onclick} className={`${styles['button--alt']}`}>Close</button>
                <button onClick={showOrderForm}>Order</button>
            </div>)
    }, [cancelOrderForm, isDisable, isDisplayOrderForm, props.onclick, props.setIsDisplayModal, showOrderForm])

    return (
        <div className={`${styles['cart-items']}`}>
            {renderCartItem(items)}
            <div className={`${styles['total']}`}>
                <h4>Total Amount</h4>
                <span>${totalAmount}</span>
            </div>
            {checkIsOrderForm()}
        </div>
    );
}

export default Cart;