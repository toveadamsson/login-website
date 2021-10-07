import React from "react";
import { Link } from "react-router-dom";


function Header({isLoggedIn}) {

  return (
    <div className="header-container">
      <h1>Website-name</h1>
      <div className="header-buttons">
        {!isLoggedIn && (
          <>
            <Link to="/">
              <button>LOGIN</button>
            </Link>
            <Link to="/register">
              <button>REGISTER</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
