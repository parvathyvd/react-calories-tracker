import React from "react";
import { useGlobalContext } from "../context/meal-context";

const AppCounter = () => {
  const { total } = useGlobalContext();
  return (
    <div className="app__controls__counter">
      <h2>
        Total Calories: <span>{total}</span>
      </h2>
    </div>
  );
};

export default AppCounter;
