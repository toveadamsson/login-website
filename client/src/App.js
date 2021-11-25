import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//*==============================
import Header from "./components/header.js";
import Register from "./components/register.js";
import SecretPage from "./components/secret-page.js";
import Login from "./components/login.js";
import Logout from "./components/logout.js";
import PrivateRoute from "./components/privateRoute.js";
//*==============================
import "./App.css";
//*========================
import useToken from "./components/useToken.js";
//*==============================

function App() {
  const { deleteToken, setToken, token } = useToken();
  const [name, setName] = useState("");

  // truthy values
  // falsy values: undefined, null, 0...
  const isLoggedIn = token !== null;
  // const isLoggedIn = boolean(token)

  // let name = "userName"
  function addName(newName) {
    //name = "tove"
    setName(newName); // 
  }

  console.log("name displayed from server.js /login endpoint", name);

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <Switch>
          <Route exact path="/">
            <Login setToken={setToken} onLoggedIn={addName} />
            {/* passing saveToken here to the login so that they are using the same hook (using the same state, from useToken). Always think which component is connected to which. In this case, from App to Login. And Header is only depended on the variable isLoggedIn from the App.js */}
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <PrivateRoute exact path="/secret-page">
            <SecretPage name={name} deleteToken={deleteToken} />
            {/* name is the value that has been retrived from the process in the login page, onLoggedIn. It is set already. */}
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
