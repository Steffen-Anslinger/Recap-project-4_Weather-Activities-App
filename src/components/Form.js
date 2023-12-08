function Form({ onAddActivity }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.nameActivity.value,
      isForGoodWeather: event.target.elements.checkbox.checked,
    };
    console.log(formData);
    // onAddActivity(formData);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new activity:</h2>
      <label htmlFor="nameActivity">Name:</label>
      <input id="nameActivity" name="nameActivity" type="text" />
      <label htmlFor="checkbox">Good weather?:</label>
      <input id="checkbox" name="checkbox" type="checkbox" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
