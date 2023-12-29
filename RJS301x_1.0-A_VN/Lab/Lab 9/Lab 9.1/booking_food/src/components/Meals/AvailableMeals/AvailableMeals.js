import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import styles from './AvailableMeals.module.css'
function AvailableMeals(props) {
    const renderMenuItem = (meals) => {
        return meals.map((meal) => {
            return <MealItem key={meal.id} meal={meal} />
        })
    }
    return (
        <div className={`${styles['meals']}`}>
            <Card>
                <ul>
                    {renderMenuItem(props.meals)}
                </ul>
            </Card>
        </div>
    );
}

export default AvailableMeals;