import Task from "./Task";

const TodoList = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>TASKS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task}></Task>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
