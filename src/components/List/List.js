import "./List.css";

function List({ activities, weather, onDeleteActivity }) {
  return (
    <>
      <h2>{weather ? "Good weather activity" : "Bad weather activity"}</h2>
      <ul>
        {activities.map(({ activityName, id }) => (
          <li key={id}>
            {activityName}
            <button
              className="button--delete"
              aria-label="Delete button"
              onClick={() => {
                onDeleteActivity({ id });
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
