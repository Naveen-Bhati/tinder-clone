import React, { Component } from "react";
import "./App.css";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preloader from "./Preloader";

import ChatScreen from "./ChatScreen";

import Profile from "./Profile";
import Matches from "./Matches";
import Matched from "./Matched";
import MyLikes from "./MyLikes";

import MyProfile from "./MyProfile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/chat/:person">
              <div className="home">
                <div className="home__matches">
                  <Matches />
                </div>
                <div className="home__mainScreen MyProfile">
                  <div className="MyProfile__chatscreen ">
                    <ChatScreen />
                  </div>
                  <div className="MyProfile__myprofile ">
                    <MyProfile />
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/Matched">
              <Matched />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/my-likes">
              <MyLikes />
            </Route>
            <Route path="/profile/edit">
              <Profile />
            </Route>

            <Route path="/">
              <div className="home">
                <div className="home__matches">
                  <Matches />
                </div>
                <div className="home__mainScreen">
                  <TinderCards />
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
