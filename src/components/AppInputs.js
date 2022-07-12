import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context/meal-context";
import MealList from "./MealList";

const AppInputs = () => {
  const [alert, setAlert] = useState({
    message: "",
    className: "default",
  });
  const { meals, calories, mealName, setMeals, setMealName, setCalories } =
    useGlobalContext();

  const onMealSubmit = (e) => {
    e.preventDefault();
    if (!mealName || !calories) {
      setAlert({
        message: "Please add all inputs",
        className: "error",
      });
      return;
    }

    const oldMeals = [...meals];
    console.log("old meal is", oldMeals);
    const meal = {
      id: new Date().getMilliseconds(),
      mealName,
      calories,
    };
    const newMeal = oldMeals.concat(meal);
    console.log("new meal is", newMeal);
    setMeals(newMeal);
    //Add meals to the local Storage
    localStorage.setItem("meals", JSON.stringify(newMeal));

    //reset input fields
    setAlert({ message: "", className: "" });
    setMealName("");
    setCalories("");
  };

  return (
    <>
      <div className="app__inputs">
        <form onSubmit={onMealSubmit}>
          <input
            type="text"
            placeholder="Add meal"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            className={alert.className}
          />
          <input
            type="number"
            placeholder="Add calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className={alert.className}
          />
          {alert.error !== "" && <span>{alert.message}</span>}
          <button className="btn-add">Add Meal</button>
        </form>
      </div>
      {meals.length > 0 &&
        meals.map((meal) => {
          return <MealList meal={meal} key={meal.id} />;
        })}
    </>
  );
};

export default AppInputs;
