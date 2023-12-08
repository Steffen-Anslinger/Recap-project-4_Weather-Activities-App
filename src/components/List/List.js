function List({ activities }) {
  return (
    <ul>
      {activities.map(({ activity, id }) => (
        <li key={id}>{activity}</li>
      ))}
    </ul>
  );
}

export default List;
