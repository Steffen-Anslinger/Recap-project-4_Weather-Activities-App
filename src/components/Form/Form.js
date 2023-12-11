import "./Form.css";

function Form({ onAddActivity }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const activityName = data.activityName;
    const isForGoodWeather = data.checkbox === "on" ? true : false;

    onAddActivity({ activityName, isForGoodWeather });

    const form = event.target.elements;
    event.target.reset();
    form.activityName.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new activity:</h2>
      <label htmlFor="activityName">Name:</label>
      <input id="activityName" name="activityName" type="text" />
      <label htmlFor="checkbox">Good weather?:</label>
      <input id="checkbox" name="checkbox" type="checkbox" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
