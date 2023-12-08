import "./App.css";
import Form from "./components/Form/Form.js";
import List from "./components/List/List.js";
// import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  // const [checkWeather, setCheckWeather] = useState(false);

  function handleAddActivity(data) {
    data.id = uid();
    const newActivity = data;
    setActivities([...activities, newActivity]);
    console.log(activities, newActivity);
  }

  const isGoodWeather = true;
  const filteredActivity = activities.filter((activity)=> { return activity.isForGoodWeather === isGoodWeather})
  console.log(filteredActivity)
  return (
    <div className="App">
      <h1>Weather and Activities App</h1>
      <p>Here we are creating the new app!</p>
      <List activities={filteredActivity} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

// onAddActivity={handleAddActivity}
