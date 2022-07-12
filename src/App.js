import "./App.css";
import Appbar from "./components/Appbar";
import AppControlDelete from "./components/AppControlDelete";
import AppCounter from "./components/AppCounter";
import AppInputs from "./components/AppInputs";
import MealSort from "./components/MealSort";
import { MealContextProvider } from "./context/meal-context";

function App() {
  return (
    <MealContextProvider>
      <div className="App">
        <Appbar />
        <div className="d-flex">
          <AppCounter />
          <AppControlDelete />
        </div>
        <AppInputs />
        <MealSort />
      </div>
    </MealContextProvider>
  );
}

export default App;
