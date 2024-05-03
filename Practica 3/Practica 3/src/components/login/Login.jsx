import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");

  const inputChangeHandler = (event) => {
    const inputUsername = event.target.value;
    if (inputUsername.toLowerCase().includes("o")) {
      alert("Please, Usernames without the letter 'o'!");
    } else {
      setUsername(inputUsername);
    }
  };

  const submitHandler = () => {
    if (username === "" || username.toLowerCase().includes("o")) {
      alert("Invalid user to register");
    } else {
      alert("User successfully registered!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={inputChangeHandler}
      />
      <br></br>
      <button onClick={submitHandler}>Sign  in</button>
      <p>Username: {username}</p>
    </div>
  );
}

export default Login;
