import React, { useState } from "react";
import { useHistory } from "react-router";
import dotenv from "dotenv";
import { URL } from "../config"
dotenv.config()

function Register() {
  const [formValues, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  let history = useHistory();

  async function registerUser({ name, email, password }) {
    // this is an async function because we don't know how long it's going to take for the operation to finish.
    // credentials are the user input, email and password.
  
  // const baseUrl = process.env.REACT_APP_API_BASE_URL || process.env.API_BASE_URL || "https://login-website-neon.vercel.app"
    // return fetch(`${baseUrl}:8080/register`, {
      return fetch(`${URL}/register`, {
      // fetch=make request/send request somewhere, in this case, the localhost...
      method: "POST", // different ways of sending the requested data. Get, Delete etc
      headers: {
        "Content-Type": "application/json", // we clarify that we are sending a json form
      },
      body: JSON.stringify({ name, email, password }), // We are transforming what we are sending to JSON
    }).then((data) => {
      // return a promise
      data.json().then((jsonResult) => {
        console.log(jsonResult);
      });
      // return data.json();
    }); //the object provided from res.send(containing the key "token")
    // data = it's what we know from the server.js, register endpoint. res.send({})
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // by adding preventDefault, we are preventing the browser from making a request with the information in the form.
    let errorMessages = [];
    let regex = /^[A-Za-z]\w{5,17}$/;
    if (formValues.password.match(regex) === null) {
      errorMessages.push(
        "password needs to contain one lower case, one upper case and between 6-16 characters"
      );
    }
    if (!(formValues.password === formValues.password2)) {
      errorMessages.push("passwords does not match");
    }
    console.log("error message containing:", errorMessages);

    if (errorMessages.length > 0) {
      alert(errorMessages);
    } else {
      // registerUser({name: formValues.name, email: formValues.email, password: formValues.password});
      registerUser({...formValues});
      alert("registration successful")
      history.push("./");
      // we are now connecting to the backend
      // send a req to the endpoint in the backend
    }
  };

  return (
    <form className="register-container" onSubmit={handleSubmit}>
      <input
        required
        value={formValues.name}
        // onChange={(e) => setName(e.target.value)}
        onChange={(event) =>
          setValues({ ...formValues, name: event.target.value })
        }
        // onChange property allows us to manage whatever happens when the text in the input is changing, when the user writes.
        // to get the input from the user, we define a function, in this case it's the event. So everytime this function is called, we get an event ( every key the user presses ).
        // setValues will be updating the name-value to a new name-value.
        placeholder="Name *"
        id="name"
      ></input>
      <input
        type="email"
        required
        value={formValues.email}
        // onChange={(e) => setEmail(e.target.value)}
        onChange={(event) =>
          setValues({ ...formValues, email: event.target.value })
        }
        placeholder="Email *"
        id="email"
      ></input>
      <input
        type="password"
        value={formValues.password}
        // onChange={(e) => setPassword(e.target.value)}
        onChange={(event) =>
          setValues({ ...formValues, password: event.target.value })
        }
        placeholder="Enter Password *"
        id="password"
      ></input>
      <input
        type="password"
        value={formValues.password2}
        // onChange={(e) => setPassword2(e.target.value)}
        onChange={(event) =>
          setValues({ ...formValues, password2: event.target.value })
        }
        placeholder="Repeat Password *"
        id="password2"
      ></input>
      <button type="submit">REGISTER</button>
    </form>
  );
}

export default Register;

// check that the username has valid characters, length, minimum characters.
// email, check that the format is the right one, contains @ and the "."
// password, check for upper/lower case, numbers and a special character.
// check if values of password and repeat password are identical. if not, send alert "no match"

// store the users 4 inputs in the state of register component.
//

// const [values, setValues] = useState({
//   username:"",
//   email: "",
//   password: "",
//   repeatPassword:""
// })

// const onSubmit = async (event) => {
//   event.preventDefault(); // Prevent default submission
//   try {
//     await saveFormData();
//     alert('Your registration was successfully submitted!');
//     setValues({
//       name: '', color: '', age: '', habits: ''
//     });
//   } catch (e) {
//     alert(`Registration failed! ${e.message}`);
//   }
// }
