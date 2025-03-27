import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const mealsData = useLoaderData();
  const meals = mealsData.meals || [];

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">
        Total Meals: {meals.length}
      </h1>
      <div className="grid grid-cols-2">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
