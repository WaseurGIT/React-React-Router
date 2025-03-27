import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { idMeal, strMeal, strCategory, strMealThumb, strTags } = meal;

  return (
    <div>
      <div className="border-2 border-red-500 rounded-2xl m-3 my-3 text-center">
        <h1 className="text-2xl font-semibold">Name : {strMeal}</h1>
        <h1 className="text-xl font-semibold">Category: {strCategory}</h1>
        <h1 className=" font-semibold">{strTags}</h1>
        <img src={strMealThumb} className="w-44 rounded-lg ml-72 my-3" alt="" />

        <Link to={`/meals/${idMeal}`}>
          <button className="p-2 m-2 text-green-400 border-b-2 rounded-lg">
            Making Instructions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Meal;
