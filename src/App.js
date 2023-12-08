import "./App.css";
import Form from "./components/Form.js";
import { useState } from "react";

function App() {
  const [nameActivity, setNameActivity] = useState("");
  const [checkWeather, setCheckWeather] = useState(false);

  function handleAddActivity(event) {
    const newActivity = event.target.nameActivity.value;
    setNameActivity([...nameActivity, newActivity]);
  }

  return (
    <div className="App">
      <h1>Weather and Activities App</h1>
      <p>Here we are creating the new app!</p>
      <Form />
    </div>
  );
}

export default App;

// onAddActivity={handleAddActivity}
