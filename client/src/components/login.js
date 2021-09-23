import React, { useState } from "react";
import { useHistory } from "react-router";
import useToken from "./useToken.js";


function Login() {
  const { setToken } = useToken();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();
// ======================================
  async function loginUser({email, password}) {
    // credentials is the {email, password} from below
    console.log(JSON.stringify({ email, password}));
    // credentials are the user input, email and password.
    return fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    }).then((data) => data.json()); //the object provided from res.send(containing the key "token")
  }
  // handleSubmit will call loginUser with the email and password, it will setToken if it's success. (in this case, prefixed test321)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
      // id eventually password.hash
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
          name="email"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} //triggered by the user input
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
