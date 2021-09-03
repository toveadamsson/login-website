import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <input placeholder="Email"></input>
      <input placeholder="First Name"></input>
      <input placeholder="Last Name"></input>
      <input placeholder="Enter Password"></input>
      <input placeholder="Repeat Password"></input>
      <Link to="/">
        <button>REGISTER</button>
      </Link>
    </div>
  );
}

export default Register;
