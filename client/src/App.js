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
  const { token } = useToken();

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
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/secret-page">
            <SecretPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
