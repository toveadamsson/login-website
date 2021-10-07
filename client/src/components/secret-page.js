import React from "react";
import { useHistory } from "react-router";

function SecretPage({deleteToken}) {
  // const { deleteToken } = useToken();
  let history = useHistory();
  // add deletetoken.


  const handleClick = (event) => {
    event.preventDefault();
    console.log("click");
    deleteToken();
    history.push("./");
  };
  return (
    <div className="secret-container">
      <h1>You have successfully accessed the secret page!</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default SecretPage;
