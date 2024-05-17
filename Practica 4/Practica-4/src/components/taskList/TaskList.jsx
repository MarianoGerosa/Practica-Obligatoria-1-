import PropTypes from "prop-types";

const Task = ({ task: { id, taskName, completed }, completeTask, deleteTask }) => (
  <div style={{ color: completed ? "red" : "inherit" }}>
    {taskName}
    <button onClick={() => completeTask(id)}>Complete</button>
    <button onClick={() => deleteTask(id)}>Delete</button>
  </div>
);

const TaskList = ({ tasks, completeTask, deleteTask }) =>
  tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      completeTask={completeTask}
      deleteTask={deleteTask}
    />
  ));

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    taskName: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      taskName: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
