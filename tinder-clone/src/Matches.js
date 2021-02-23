import React from "react";
import "./Matches.css";
import ProfileSidebarNavbar from "./ProfileSidebarNavbar";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import Chats from "./Chats";
import { Component } from "react";
import { Link } from "react-router-dom";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMessageClicked: false,
    };
  }

  swipeToMessages(e) {
    e.preventDefault();
    this.setState({
      isMessageClicked: false,
    });
  }
  swipeToMatches(e) {
    e.preventDefault();
    this.setState({
      isMessageClicked: true,
    });
  }

  render() {
    const { isMessageClicked } = this.state;
    return (
      <div className="matches">
        <ProfileSidebarNavbar />
        <div className="matchbuttons">
          <div className="button__matches">
            <button
              id="Matches"
              className={`buttons ${isMessageClicked ? "buttonsClicked" : ""}`}
              onClick={(e) => this.swipeToMessages(e)}
            >
              <a href="#" className={`${isMessageClicked ? "" : "underline"}`}>
                Matches
              </a>
            </button>
          </div>
          <div className="button__messages">
            <button
              id="Messages"
              className={`buttons ${isMessageClicked ? "buttonsClicked" : ""}`}
              onClick={(e) => this.swipeToMatches(e)}
            >
              <a href="#" className={`${isMessageClicked ? "underline" : ""}`}>
                Messages
              </a>
            </button>
          </div>
        </div>
        <div
          id="container"
          className={`${
            isMessageClicked ? "swipeToMessages" : "swipeToMatches"
          }`}
        >
          <Link to="/my-likes">
            <div className="likes__container content a">
              <div>
                <div className="likeIcon">
                  <FavoriteSharpIcon fontSize="large" />
                </div>

                <span
                  style={{
                    position: "absolute",
                    top: "100px",
                    display: "flex",
                  }}
                >
                  Likes Sent
                </span>
              </div>
            </div>{" "}
          </Link>
          <div className="content b">
            <Chats />
          </div>
        </div>
      </div>
    );
  }
}

export default Matches;
