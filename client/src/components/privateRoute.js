// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

import React from "react";
import { Redirect, Route } from "react-router-dom";
import useToken from "./useToken.js";

const PrivateRoute = ({ children, ...rest }) => {
  // Add your own authentication on the below line.
  const { token } = useToken();

  return (
    // If authentic: they proceed to the page,
// If not: they are redirected to the login page.
    <Route
      {...rest}
      render={({location}) =>
        token ? (
          children 
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: location } }}
          />
        )
      }
    />
  );
};



export default PrivateRoute;
