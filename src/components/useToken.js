import { useState } from "react";
// We don't have to import React in this file because we are not using JSX elements

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token"); //The browser allows us to use the storage to store the token provided by the user when logged in. "token" is the name of the key in the sessionStorage.

    const userToken = JSON.parse(tokenString); // converting / translating the token

    // if(userToken)
    // return userToken.token;
    // return userToken;

    // return userToken ? userToken.token : userToken;    
    
    return userToken?.token; // (if userToken variable is undefined, it will not access the token property)
  };
  // You need to use the optional chaining operator—?.—when accessing the token property because when you first access the application, the value of sessionStorage.getItem('token') will be undefined. If you try to access a property, you will generate an error.

  const [token, setToken] = useState(getToken()); // By using the getToken function, it sets the token as the initial state.

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken)); // Store(save) the token in to sessionStorage, converting it to a string. A string version of the object.
    setToken(userToken.token); // Saving the token,provided by the user normally, in this case it's prefixed, to the state
  };
  return {
    // returning to properties, setToken (previously saveToken) and the token ( the value "token" )
    setToken: saveToken,
    token,
  };
}
