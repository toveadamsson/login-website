import React, { useState } from "react";
import { useHistory } from "react-router";
import useToken from "./useToken.js";

async function loginUser(credentials) {
  console.log(JSON.stringify(credentials))
  // credentials are the user input, username and password.
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json()); //the object provided from res.send(containing the key "token")
}

function Login() {
  const { setToken } = useToken();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  // const [id, setId] = useState()

  let history = useHistory();

  // handleSubmit will call loginUser with the username and password, it will setToken if it's success. (in this case, prefixed test321)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    if (token) {
      history.push("./secret-page");
    }
  };

  return (
    <div className="front-container">
      <form onSubmit={handleSubmit}>
        <input
        name="username"
          type="text"
          placeholder="Email"
          onChange={(e) => setUserName(e.target.value)} //triggered by the user input
        />
        <input
        name="password"
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} //triggered by the user input
        />
        {/* by adding submit, does this trigger handleSubmit always? */}
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}



export default Login;
