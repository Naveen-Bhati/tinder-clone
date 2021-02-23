import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import Avatar from "@material-ui/core/Avatar";
import "./ProfileSidebarNavbar.css";

function ProfileSidebarNavbar() {
  return (
    <div className="sidebar__nav">
      <div className="nav__personicon">
        <Link to="/">
          <PersonIcon className="personButton" fontSize="large" />
        </Link>
      </div>

      <div className="sidebar__profile">
        <a href="/profile">
          <Avatar
            className="avatar__navbar"
            src="https://static.zerochan.net/Albus.Dumbledore.full.616027.jpg"
            alt=""
          />
        </a>

        <Link to="/profile">
          <h3 style={{ fontWeight: "600" }}>My Profile</h3>
        </Link>
      </div>
    </div>
  );
}

export default ProfileSidebarNavbar;
