import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//*==============================
import Header from "./components/header.js";
// import Register from "./components/register.js";
import SecretPage from "./components/secret-page.js";
import Login from "./components/login.js";
import useToken from "./components/useToken.js"
//*==============================
import "./App.css";
//*==============================
// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }
// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }


function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {/* ===== */}
          {/* <Route exact path="/register">
            <Register />
          </Route> */}
          {/* ===== */}
          <Route exact path="/secret-page">
            <SecretPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
