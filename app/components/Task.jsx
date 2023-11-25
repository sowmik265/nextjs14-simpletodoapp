const Task = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>Blue</td>
    </tr>
  );
};

export default Task;
