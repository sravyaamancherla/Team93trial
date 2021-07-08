import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const DropDownMenu = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { currentUser, logout } = useAuth();
  async function handleLogout() {
    // setError("");

    try {
      await logout();
      history.push("/login");
    } catch (err) {
      // setError("Failed to log out");
      console.log(err);
    }
  }

  return (
    <div>
      <div aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        {currentUser && (
          <img
            src={currentUser.photoURL}
            style={{ width: "25px", cursor: "pointer" }}
            alt=""
          />
        )}
      </div>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/main/update-profile">Update Profile</Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default DropDownMenu;
