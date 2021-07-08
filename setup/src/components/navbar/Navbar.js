import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import "./Navbar.css";
const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  // const [error, setError] = useState("");

  return (
    <div className="main-navbar">
      {currentUser && <p>{currentUser.displayName}</p>}

      {console.log(currentUser)}
      {/* {currentUser && <p>{currentUser.email}</p>} */}

      <DropDownMenu history={history} />
      {/* <button onClick={handleLogout}>Log Out</button> */}

      {/* <p>{currentUser}</p> */}
    </div>
  );
};

export default Navbar;
