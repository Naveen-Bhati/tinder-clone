import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import "./MobileHeaderIcons.css";
function MobileHeaderIcons(props) {
  return (
    <div className="headerIcons">
      <a
        href="/"
        className={`rightHeaderIcons__ rightHeaderIcons__home ${props.classNameHomepage}`}
      >
        <HomeIcon fontSize="large" />
      </a>
      <a
        href="/my-likes"
        className={`rightHeaderIcons__ rightHeaderIcons__likes ${props.classNameMylikes} `}
      >
        <DashboardIcon fontSize="large" />
      </a>
      <a
        href="/Matched"
        className={`rightHeaderIcons__ rightHeaderIcons__messages ${props.classNameMatched}`}
      >
        <QuestionAnswerRoundedIcon fontSize="large" />
      </a>
      <a
        href="/profile"
        className={`rightHeaderIcons__ rightHeaderIcons__profile ${props.classNameProfile}`}
      >
        <PersonIcon fontSize="large" />
      </a>
    </div>
  );
}

export default MobileHeaderIcons;
