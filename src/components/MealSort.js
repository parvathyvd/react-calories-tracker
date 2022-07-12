import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context/meal-context";

const MealSort = () => {
  const { setMeals, meals } = useGlobalContext();
  const [selectedOption, setSelectedOption] = useState("");
  const oldMeal = [...meals];

  const onMealSelect = (e) => {
    console.log("get the meal select value", e.target.value);
    setSelectedOption(e.target.value);
    if (e.target.value === "Ascending") {
      const ascMeals = oldMeal.sort((a, b) => a.calories - b.calories);
      console.log("asc meals", ascMeals);
      setMeals(ascMeals);
    } else if (e.target.value === "Descending") {
      const descMeals = oldMeal.sort((a, b) => b.calories - a.calories);
      console.log("desc meals", descMeals);
      setMeals(descMeals);
    } else {
      return;
    }
  };

  return (
    <div className="meal-sort">
      <select
        name="sort"
        id="sort"
        onChange={onMealSelect}
        defaultValue={selectedOption}
      >
        <option name="sort">---Sort the menu---</option>
        <option name="ascending">Ascending</option>
        <option name="descending">Descending</option>
      </select>
    </div>
  );
};

export default MealSort;
