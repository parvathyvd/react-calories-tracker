import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useGlobalContext } from "../context/meal-context";

const MealList = ({ meal }) => {
  const { onDelete } = useGlobalContext();
  const onDeleteHandler = (id) => {
    onDelete(id);
  };
  return (
    <div className="meal-list">
      <h4>{meal.mealName}</h4>
      <h4>{meal.calories}</h4>
      <AiFillCloseCircle
        className="close"
        onClick={() => onDeleteHandler(meal.id)}
      />
    </div>
  );
};

export default MealList;
