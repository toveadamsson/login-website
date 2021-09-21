import React, { useState } from "react";
// import { useHistory } from "react-router";
// import axios from "axios"
function Register() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");

  const [formValues, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  //   let history = useHistory();
  // //*=========================
  //   const test = async () => {
  //     if(form.password.length  < 8){
  //       return Alert.alert('password needs to have min 8 characters')
  //     }
  //     try {
  //       const response = await axios.post(
  //         "/users/register",
  //         {username,email,password,password2}
  //       );
  //    //! insert some validation and push to mongodb?
  //       if (response.data.ok) return  history.push("./login");;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };



  const handleSubmit = (event) => {
    event.preventDefault();
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
      alert("SUCCESS")
    }

  };

  return (
    <form className="register-container" onSubmit={handleSubmit}>
      <input
        required
        value={formValues.username}
        // onChange={(e) => setUsername(e.target.value)}
        onChange={(event) =>
          setValues({ ...formValues, username: event.target.value })
        }
        // onChange property allows us to manage whatever happens when the text in the input is changing, when the user writes.
        // to get the input from the user, we define a function, in this case it's the event. So everytime this function is called, we get an event ( every key the user presses ).
        // setValues will be updating the username-value to a new username-value.
        placeholder="Username *"
        id="username"
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
