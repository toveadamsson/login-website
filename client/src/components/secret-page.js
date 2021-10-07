import React from "react";
import useToken from "./useToken";
function SecretPage() {
  const { deleteToken } = useToken();
  // add deletetoken.
  
  const handleClick = (event) => {
    event.preventDefault()

    deleteToken()
  }
  return (
    <div className="secret-container">
      <h1>You have successfully accessed the secret page!</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default SecretPage;
