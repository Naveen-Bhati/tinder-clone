import React from "react";
import "./Matched.css";
import MobileHeaderIcons from "./MobileHeaderIcons";
import Chats from "./Chats";

function Matched() {
  return (
    <div className="matched">
      <MobileHeaderIcons classNameMatched="mobileHeaderIcons__Matched" />
      <strong>Messages</strong>
      <Chats />
    </div>
  );
}

export default Matched;
