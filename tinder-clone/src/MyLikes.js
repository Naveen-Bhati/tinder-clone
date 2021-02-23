import React, { useState, useEffect } from "react";
import Matches from "./Matches";
import "./MyLikes.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import MobileHeaderIcons from "./MobileHeaderIcons";

function MyLikes() {
  const [people, setPeople] = useState([
    {
      age: "22",
      name: "Naveen Bhati",
      url:
        "https://i.pinimg.com/originals/70/00/03/700003f132767a36f361db1aa14cb1f4.jpg",
    },
    {
      age: "",
      name: "Albus Dumbledore",
      url:
        "https://i.pinimg.com/564x/42/bb/ac/42bbac272a56612f73ba5cc31eabd169.jpg",
    },
    {
      age: "",
      name: "Newt Scamander",
      url:
        "https://i.pinimg.com/236x/4d/14/bd/4d14bd899a16d4571568501e1fe7d24b.jpg",
    },
    {
      age: "",
      name: "Severus Snape",
      url:
        "https://i.pinimg.com/564x/c4/52/67/c45267a6a13cec8abaaa1e4f8c63185f.jpg",
    },
    {
      age: "",
      name: "Tom Marvolo Riddle",
      url:
        "https://i.pinimg.com/564x/f2/d7/9e/f2d79e92c14fb0837f02b1751f1dafa7.jpg",
    },
    {
      age: "",
      name: "Gellert Grindelwald",
      url:
        "https://i.pinimg.com/564x/46/0a/a9/460aa9c0e745a3c180602f9b11f7911d.jpg",
    },
    {
      age: "",
      name: "Dobby",
      url:
        "https://i.pinimg.com/564x/9d/20/6b/9d206b2423518d0a5329b4fe093d265e.jpg",
    },
    {
      age: "",
      name: "Suryaputra Karna",
      url:
        "https://i.pinimg.com/564x/fc/e5/ba/fce5ba05e7643346e89ebe2654fd28f2.jpg",
    },
  ]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="myLikes">
      <div className="allLikedPhotos__sidebar">
        <Matches />
      </div>
      <div className="allLikedPhotos__div">
        <MobileHeaderIcons classNameMylikes="mobileHeaderIcons__mylikes" />
        <div className="allLikedPhotos__divLikesSent">
          <FavoriteIcon fontSize="large" className="favoriteIcon" />
          <h2> Likes Sent</h2>
        </div>
        <br />
        <p>Be seen Faster. with Tinder Platinum we'll prioritize your likes.</p>
        <br />
        <div className="allLikedPhotos__photos">
          {people.map((person) => (
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="carddd"
            >
              <p>{person.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyLikes;
