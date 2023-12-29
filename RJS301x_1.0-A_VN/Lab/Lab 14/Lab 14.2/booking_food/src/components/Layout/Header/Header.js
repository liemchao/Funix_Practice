import styles from './Header.module.css'
import mealsImg from '../../../assets/meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import Modal from '../../UI/Modal/Modal';
import Cart from '../../Cart/Cart';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
    const [isDisplayModal, setIsDisplayModal] = useState(false);

    const closeCart = () => {
        setIsDisplayModal(false);
    }

    const openCart = () => {
        setIsDisplayModal(true);
    }

    return (
        <div id="header">
            <div className={`${styles['main-image']}`}>
                <img src={mealsImg} alt='' />
            </div>
            <div className={`${styles['header']}`}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onclick={openCart} />
            </div>
            <Modal isDisplay={isDisplayModal ? 'd-block' : 'd-none'}>
                <Cart setIsDisplayModal={setIsDisplayModal} onclick={closeCart} />
            </Modal>
        </div>
    );
}

export default Header;