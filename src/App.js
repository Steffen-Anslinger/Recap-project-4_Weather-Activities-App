import "./App.css";
import Form from "./components/Form/Form.js";
import List from "./components/List/List.js";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([
    "Surfing",
    "Hiking",
    "Dancing",
  ]);
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
      <List activities={activities} />
    </div>
  );
}

export default App;

// onAddActivity={handleAddActivity}
