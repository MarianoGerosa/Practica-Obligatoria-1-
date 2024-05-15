import { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ addTask }) => {
  const [input, setInput] = useState("");

  const submitHandler = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={submitHandler}>Add Task</button>
    </div>
  );
};

export default AddTask;

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};
