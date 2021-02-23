import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import GifIcon from "@material-ui/icons/Gif";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachmentIcon from "@material-ui/icons/Attachment";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function ChatScreen() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      name: "Snape",
      image:
        "https://static1.comicvine.com/uploads/original/11123/111237346/5169862-severus_snape_and_the_grave_by_kyla79.jpg",
      message: "you promised me to save her!",
    },
    {
      name: "Snape",
      image:
        "https://static1.comicvine.com/uploads/original/11123/111237346/5169862-severus_snape_and_the_grave_by_kyla79.jpg",
      message: "why",
    },
    {
      message: "they also trusted the wrong man",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <div className="chatScreen__header">
        <a href="/Matched">
          <div className="chatScreen__headerIcon">
            <ArrowBackIosIcon fontSize="large" />
          </div>
        </a>

        <div className="chatScreen__headerName">
          <Avatar
            className="chatScreen__image"
            alt={messages[0].name}
            src={messages[0].image}
          />
          <span>{messages[0].name}</span>
        </div>
        <a href="#">
          <div className="chatScreen__headerIcon">
            <MoreHorizIcon fontSize="large" />
          </div>
        </a>
      </div>
      <div className="chatScreen__screen">
        <p className="chatScreen__timestamp">
          YOU MATCHED WITH SNAPE ON 10/07/1876
        </p>

        {messages.map((message) =>
          message.name ? (
            <div className="chatScreen__message">
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{message.message}</p>
            </div>
          )
        )}

        <div></div>
      </div>
      <div className="chatScreen__form">
        <form className="chatScreen__input">
          <div className="sendIcons">
            <GifIcon className="GifIcon" fontSize="large" />
            <MusicNoteIcon className="MusicNoteIcon" fontSize="large" />
            <AttachmentIcon className="AttachmentIcon" fontSize="large" />
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
          ></input>
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
