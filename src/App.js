import "./App.css";
import Form from "./components/Form/Form.js";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState("");
  // const [checkWeather, setCheckWeather] = useState(false);

  function handleAddActivity({ name, isForGoodWeather }) {
    const newActivity = { name };
    const isChecked = { isForGoodWeather };

    setActivities([...activities, { newActivity, id: uid(), isChecked }]);
    console.log(activities);
  }

  return (
    <div className="App">
      <h1>Weather and Activities App</h1>
      <p>Here we are creating the new app!</p>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

// onAddActivity={handleAddActivity}
