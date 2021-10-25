import React from "react";
import { useForm } from "react-hook-form";
// import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Logout() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="App">
      <input
        name="username"
        type="text"
        placeholder="Username"
        ref={register({ required: "This is required." })}
      />
      <div className="pass-wrapper">
        <input
          placeholder="Password"
          name="password"
          type="password"
          ref={register({ required: "This is required." })}
        />
        <i>{eye}</i>
      </div>
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        Submit
      </button>
    </div>
  );
}