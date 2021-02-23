import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";
import SwipeButtons from "./SwipeButtons";
import MobileHeaderIcons from "./MobileHeaderIcons";

function TinderCards() {
  const [people, setPeople] = useState([]);

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

  function swiped(direction, nameToDelete) {
    console.log("removing: ", nameToDelete);
  }

  function outOfFrame(name) {
    console.log(name + " left the screen");
  }

  return (
    <div>
      <div>
        <MobileHeaderIcons classNameHomepage="mobileHeaderIcons__homepage" />
      </div>
      <div className="tinderCards">
        <div className="under__tindercards">
          <div className="under__tindercards_div">
            <div className="under__tindercards_divImage">
              <img
                src="https://static.zerochan.net/Albus.Dumbledore.full.616027.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="upper__tindercards">
          <div className="upper__tindercards_div">
            {people.map((person) => (
              <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
              >
                <div
                  style={{ backgroundImage: `url(${person.url})` }}
                  className="card"
                >
                  <h3>
                    {person.name} <span>{person.age}</span>
                  </h3>
                </div>
              </TinderCard>
            ))}
          </div>

          <div className="upper__tindercards_swipebuttons">
            <SwipeButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TinderCards;
