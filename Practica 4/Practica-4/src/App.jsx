import { useState } from "react";
import Task from "./components/task/Task";
import AddTask from "./components/addTask/AddTask";

const App = () => {
  const [task, setTask] = useState([]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), taskName, completed: false };
    setTask([...task, newTask]);
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
      <AddTask addTask={addTask} />
      <Task 
        task={task} 
        completeTask={completeTask} 
        deleteTask={deleteTask} 
      />
    </div>
  );
};

export default App;
