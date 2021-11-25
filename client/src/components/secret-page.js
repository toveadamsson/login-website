import React from "react";
import { useHistory } from "react-router";

function SecretPage({ deleteToken, name}) {
  //name is being passed from App.js to be able to display users name in the h1.
  // const { deleteToken } = useToken();
  let history = useHistory();
  // add deletetoken.
  // console.log(name);

  const handleClick = (event) => {
    event.preventDefault();
    console.log("click");
    deleteToken();
    history.push("./");
  };
  return (
    <div className="secret-container">
      <h1>Welcome {name}, you've have successfully accessed the secret page!</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
export default SecretPage;