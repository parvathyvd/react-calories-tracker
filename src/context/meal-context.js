import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const MealContext = createContext();

export const MealContextProvider = ({ children }) => {
  const [meals, setMeals] = useState(() => {
    const mealsItem = JSON.parse(localStorage.getItem("meals"));
    return mealsItem || [];
  });
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0);
  const [total, setTotal] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    //update total
    const totalVal = meals
      .map((meal) => meal.calories)
      .reduce((acc, meal) => acc + +meal, 0);
    setTotal(totalVal);

    console.log("total is", totalVal);
  }, [meals]);

  useEffect(() => {
    const mealsItem = JSON.parse(localStorage.getItem("meals"));
    console.log(mealsItem);
    setMeals(mealsItem);
  }, []);

  const onDelete = (id) => {
    const afterDelete = meals.filter((meal) => meal.id !== id);
    setMeals(afterDelete);
    localStorage.setItem("meals", JSON.stringify(afterDelete));
  };

  const deleteAll = () => {
    localStorage.setItem("meals", JSON.stringify([]));
    setMeals([]);
  };

  return (
    <MealContext.Provider
      value={{
        meals,
        mealName,
        calories,
        total,
        modalShow,
        setModalShow,
        setTotal,
        setMeals,
        setMealName,
        setCalories,
        onDelete,
        deleteAll,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useGlobalContext = () => useContext(MealContext);
