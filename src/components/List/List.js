function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li>{activity}</li>
      ))}
    </ul>
  );
}

export default List;
