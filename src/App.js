import "./App.css";
import Form from "./components/Form/Form.js";
import List from "./components/List/List.js";
import { useState } from "react";
// import { UID, uid, UIDFork, UIDConsumer, UIDReset } from "react-uid";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([
    { activity: "Hiking", id: "1" },
  ]);
  // const [checkWeather, setCheckWeather] = useState(false);

  function handleAddActivity(data) {
    data.id = uid();
    setActivities([...activities, data]);
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
