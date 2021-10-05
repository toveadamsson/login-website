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
    // console.log(JSON.stringify({ email, password}));
    // credentials are the user input, email and password.
    return fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    }).then((data) => { return data.json()}); //the object provided from res.send(containing the property "token" and "success") data = token and success. could also be written as data.json()
  }
  // handleSubmit will call loginUser with the email and password, it will setToken if it's success. (in this case, prefixed test321)


  // (event) is the paramater that receives an object with the event that got triggered, in this case it's the submit event in the form.
  const handleSubmit = async (event) => {
    event.preventDefault();

    // destructuring {token, success} =>
    const {success, token} = await loginUser({
      email,
      password,
      // id eventually password.hash
    });

    if (success){
       setToken(token);
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
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} //triggered by the user input
        />
        {/* by adding submit, does this trigger handleSubmit always? */}
        <button type="submit">LOGIN</button> 
        {/* when a button has the type submit inside a form, it triggers an event, that is the submitevent, onSubmit(should be in the form tag). */}
      </form>
      
    </div>
  );
}

export default Login;