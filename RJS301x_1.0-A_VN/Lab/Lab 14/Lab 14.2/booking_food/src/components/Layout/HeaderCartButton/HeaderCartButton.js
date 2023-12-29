import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './HeaderCartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

function HeaderCartButton(props) {

    const { items } = useContext(CartContext)

    return (<>
        <button onClick={props.onclick} className={`${styles['button']}`}>
            <FontAwesomeIcon icon={faShoppingCart} className={`${styles['icon']}`} />
            Your Cart
            <span className={`${styles['badge']} ${styles['bump']}`}>{items.length}</span>
        </button>
    </>);
}

export default HeaderCartButton;
