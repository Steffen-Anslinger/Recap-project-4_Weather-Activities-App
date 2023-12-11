import "./App.css";
import Form from "./components/Form/Form.js";
import List from "./components/List/List.js";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";


function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState([]);

  function handleAddActivity(newActivity) {
    newActivity.id = uid();
    setActivities([...activities, newActivity]);
  }

  const filteredActivity = activities.filter((activity)=>   activity.isForGoodWeather === weather.isGoodWeather )

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const apiData = await response.json();

      setWeather(apiData);
    }

    fetchWeather();
  }, []);

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
