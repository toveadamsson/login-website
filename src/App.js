import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//*==============================
import Header from "./components/header.js";
import Register from "./components/register.js";
import SecretPage from "./components/secret-page.js";
import FrontPage from "./components/front-page.js";
//*==============================
import "./App.css";
//*==============================

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          {/* ===== */}
          <Route exact path="/register">
            <Register />
          </Route>
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
