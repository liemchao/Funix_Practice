import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealsSummary from "./MealsSummary/MealsSummary";

function Meals(props) {
    return (
        <>
            <MealsSummary />
            <AvailableMeals isLoading={props.isLoading} meals={props.meals} />
        </>
    );
}

export default Meals;