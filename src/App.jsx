import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json"
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {

const [allFood, setAllFood] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm allFood={allFood} setAllFood={setAllFood} />

      {allFood.map((cadaComida, indice) => {
          return (
            <FoodBox 
            food={cadaComida} 
            indice={indice}
            allFood={allFood}
            setAllFood={setAllFood} /> 
          )
      })}

    </div>
  );
}

export default App;
