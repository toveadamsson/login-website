import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//*==============================
import Header from "./components/header.js";
import Register from "./components/register.js";
import SecretPage from "./components/secret-page.js";
import Login from "./components/login.js";
import PrivateRoute from "./components/privateRoute.js";
//*==============================
import "./App.css";
//*======================== 
import useToken from "./components/useToken.js";
//*==============================

function App() {
  const { deleteToken, setToken, token } = useToken();

  // truthy values
  // falsy values: undefined, null, 0...
  const isLoggedIn = token !== null;
  // const isLoggedIn = boolean(token)

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <Switch>
          <Route exact path="/">
            <Login setToken={setToken} />
            {/* passing saveToken here to the login so that they are using the same hook (using the same state, from useToken). Always think which component is connected to which. In this case, from App to Login. And Header is only depended on the variable isLoggedIn from the App.js */}
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/secret-page">
            <SecretPage deleteToken={deleteToken} />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
