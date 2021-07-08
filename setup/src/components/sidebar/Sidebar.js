import React from "react";
import Logo from "../../images/logo.png";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ setIsSideBarOpen, isSideBarOpen }) => {
  const data = [
    {
      title: "Dashboard",
      path: "/main",
      icon: <HomeIcon style={{ color: "white" }} />,
    },
    {
      title: "SubMenu1",
      path: "/submenu1",
      icon: <AccountCircleIcon style={{ color: "white" }} />,
    },
    {
      title: "SubMenu2",
      path: "/submenu2",
      icon: <PeopleAltIcon style={{ color: "white" }} />,
    },
    {
      title: "SubMenu3",
      path: "/submenu3",
      icon: <AddPhotoAlternateIcon style={{ color: "white" }} />,
    },
  ];
  return (
    <div className="main-sidebar">
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <img src={Logo} className="sidebar__logo__img" alt="" />
        </div>
        {isSideBarOpen && <div className="sidebar__logo__text">Brand Name</div>}
      </div>
      <div className="divider"></div>
      <div className="sidebar__navigation">
        {data.map((item, index) => {
          return (
            <NavLink className="sidebar__links" to={item.path}>
              <Tooltip title={item.title} placement="right">
                {/* <Button>right</Button> */}
                <div className="sidebar__navItem" key={index}>
                  {item.icon}

                  {isSideBarOpen && (
                    <div className="sidebar__navItem__title">{item.title}</div>
                  )}
                </div>
              </Tooltip>
            </NavLink>
          );
        })}
      </div>
      <div
        className="sidebar__footer"
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
        <div className="sidebar__footer__icon">
          {isSideBarOpen ? (
            <ArrowBackIosIcon style={{ color: "white", fontSize: "0.85rem" }} />
          ) : (
            <ChevronRightIcon style={{ color: "white" }} />
          )}
        </div>
        {isSideBarOpen && <div className="sidebar__footer__text">Collapse</div>}
      </div>
    </div>
  );
};

export default Sidebar;
