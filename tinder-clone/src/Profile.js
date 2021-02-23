import React from "react";
import "./Profile.css";
import ProfileBody from "./ProfileBody.js";
import ProfileSidebar from "./ProfileSidebar.js";
import MobileHeaderIcons from "./MobileHeaderIcons";
import SettingsIcon from "@material-ui/icons/Settings";
import EditIcon from "@material-ui/icons/Edit";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import IconButton from "@material-ui/core/IconButton";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__body">
        <ProfileSidebar />
        <ProfileBody />
      </div>
      <div className="setting__mobile">
        <MobileHeaderIcons classNameProfile="mobileHeaderIcons__profile" />
        <br />
        <br />
        <div className="setting__mobileMain">
          <div className="setting__image"></div>
          <div className="setting__name">
            <h2>
              Naveen <span>22</span>
            </h2>
          </div>
          <div className="setting__buttonsDiv">
            <div className="settingbuttons__div1">
              <IconButton className="settingbuttons__setting">
                <SettingsIcon fontSize="large" />
              </IconButton>
              <IconButton className="settingbuttons__Edit">
                <EditIcon fontSize="large" />
              </IconButton>
            </div>
            <div className="settingbuttons__div2">
              <IconButton className="settingbuttons__addmedia">
                <AddAPhotoIcon fontSize="large" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
