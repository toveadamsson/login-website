import React from "react";
// import useToken from "./useToken";
// import { useHistory } from "react-router";

function SecretPage({email, password}) {
  // const { setToken } = useToken();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // let history = useHistory();

//   const handleOnClick = async (event) => {
//     event.preventDefault();
//     const { token } = await useToken({
//       token,
//     });
//     if (token) {
//       setToken(!token);
//       history.push("./login");
//     }
//   };

// async function loginUser({email, password}) {
//     // credentials is the {email, password} from below
//     // console.log(JSON.stringify({ email, password}));
//     // credentials are the user input, email and password.
//     return fetch("http://localhost:8080/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({email, password}),
//     }).then((data) => { return data.json()}); //the object provided from res.send(containing the property "token" and "success") data = token and success. could also be written as data.json()
//   }

// const handleClick = async (event) => {
//     event.preventDefault();

//     // destructuring {token, success} =>
//     const {success, token} = await loginUser({
//       email,
//       password,
//       // id eventually password.hash
//     });

//     if (!success){
//        setToken(token == nulll);
//       history.push("./secret-page");
//   }
//   };

//   sessionStorage.clear()

//   const handleClick = () => {

//     return   sessionStorage.clear()
//   }

  return (
    <div className="secret-container">
      <h1>You have successfully accessed the secret page!</h1>
    </div>
  );
}
// onClick={handleOnClick}

export default SecretPage;
