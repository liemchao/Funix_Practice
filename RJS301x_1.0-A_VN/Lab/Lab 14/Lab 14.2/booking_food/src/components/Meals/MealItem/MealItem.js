
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm/MealItemForm';
function MealItem(props) {
    return (
        <div className={`${styles['meal']}`}>
            <div>
                <h3>{props.meal.name}</h3>
                <p className={`${styles['description']}`}>{props.meal.description}</p>
                <p className={`${styles['price']}`}>${props.meal.price}</p>
            </div>
            <MealItemForm meal={props.meal} />
        </div>
    );
}

export default MealItem;