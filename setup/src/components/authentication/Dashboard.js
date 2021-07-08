import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <h1>From Dashboard</h1>
      {/* {console.log(currentUser)} */}
      {/* {error && <p>{error}</p>} */}
      <p>{currentUser && currentUser.email}</p>

      {/* <Link to="/main/update-profile">Update Profile</Link> */}
    </div>
  );
};

export default Dashboard;
