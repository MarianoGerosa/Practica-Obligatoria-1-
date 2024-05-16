import { useState } from "react";
import "./App.css";
import TaskList from "./components/taskList/TaskList";
import AddTask from "./components/addTask/AddTask";

const App = () => {
  const [task, setTask] = useState([]);
  const [taskId, setTaskId] = useState(1);

  const addTask = (taskName) => {
    const newTask = { id: taskId, taskName, completed: false };
    setTask([...task, newTask]);
    setTaskId(taskId + 1);
  };

  const completeTask = (id) => {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Task List</h1>

      <AddTask addTask={addTask} />
      <TaskList
        tasks={task}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
