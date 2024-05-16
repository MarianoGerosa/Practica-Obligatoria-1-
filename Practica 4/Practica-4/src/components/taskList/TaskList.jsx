import PropTypes from "prop-types";

const Task = ({ task, completeTask, deleteTask }) => (
  <div style={{ color: task.completed ? "red" : "inherit" }}>
    {task.taskName}
    <button onClick={() => completeTask(task.id)}>Complete</button>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
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

export default TaskList;

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
