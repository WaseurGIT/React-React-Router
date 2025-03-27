import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
  const mealDetails = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const meal = mealDetails.meals ? mealDetails.meals[0] : {};

  const { strMeal, strInstructions } = meal;

  return (
    <div>
      <div className="w-[1100px] border-t-3 border-l-3 border-r-3 border-b-2 border-violet-700 rounded-xl p-4 m-4 mx-auto">
        <h2 className="text-2xl font-bold mt-2 mb-5">{strMeal}</h2>
        <h2 className="text-xl font-semibold underline mb-5">
          Making Instruction
        </h2>
        <h2> {strInstructions}</h2>

        <button
          className="text-xl font-semibold text-red-500 m-5 border-2 p-2 rounded-lg"
          onClick={handleGoBack}
        >
          {" "}
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default MealDetails;
