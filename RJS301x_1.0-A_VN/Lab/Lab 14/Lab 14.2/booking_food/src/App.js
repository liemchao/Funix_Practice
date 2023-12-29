import { useCallback, useEffect, useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import useHttp from "./hook/useHttp";

function App() {

  const { isLoading, sendRequest: fetchMeals } = useHttp();
  const [meals, setMeals] = useState([]);

  const transferData = useCallback((data) => {
    let tmpMeals = [];
    for (const key in data) {
      const meal = {
        id: data[key].id,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      }
      tmpMeals.push(meal);
    }
    setMeals(tmpMeals);
  }, [])

  useEffect(() => {
    fetchMeals({
      url: 'https://movie-7d02e-default-rtdb.firebaseio.com/food.json',
    }, transferData)
  }, [fetchMeals, transferData]);


  return (
    <div className="App">
      <Header />
      <Meals isLoading={isLoading} meals={meals} />
    </div>
  );
}

export default App;
