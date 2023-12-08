import "./Form.css";

function Form({ onAddActivity }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    // const formData = {
    //   name: event.target.elements.activity.value,
    //   isForGoodWeather: event.target.elements.checkbox.checked,
    // };

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data.activity);

    event.target.reset();
    event.target.elements.activity.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new activity:</h2>
      <label htmlFor="activity">Name:</label>
      <input id="activity" name="activity" type="text" />
      <label htmlFor="checkbox">Good weather?:</label>
      <input id="checkbox" name="checkbox" type="checkbox" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
