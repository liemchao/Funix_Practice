import Loading from '../../LoadingModal/LoadingModal';
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
            {props.isLoading ? <Loading /> : <ul>{renderMenuItem(props.meals)}</ul>}  
            </Card>
        </div>
    );
}

export default AvailableMeals;