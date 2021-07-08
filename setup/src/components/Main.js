import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./authentication/Dashboard";
import PrivateRoute from "./authentication/PrivateRoute";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import UpdateProfile from "./authentication/UpdateProfile";
import "./index-components.css";

const Main = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <div>
      <Router>
        {/* <Sidebar
          setIsSideBarOpen={setIsSideBarOpen}
          isSideBarOpen={isSideBarOpen}
        /> */}
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route exact path="/main" component={Dashboard} />
            <Route path="/main/update-profile" component={UpdateProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Main;
