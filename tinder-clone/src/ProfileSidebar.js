import React from "react";
import "./ProfileSidebar.css";
import { Grid, Slider } from "@material-ui/core";

import ProfileSidebarNavbar from "./ProfileSidebarNavbar";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function ProfileSidebar({ backButton }) {
  return (
    <div className="profileSidebar">
      <ProfileSidebarNavbar />
      <br />
      <div className="sidebar__body">
        <div className="paidFeature__ultraPro">
          <div className="tinderUltraPro">
            <img
              src={window.location.origin + "/images/TinderUltraPro.svg"}
              alt=""
            />
            <p>A First Class Dating Experience</p>
          </div>
        </div>
        <div className="paidFeature__ultra">
          <div className="tinderUltra">
            <img
              src={window.location.origin + "/images/TinderUltra.svg"}
              alt=""
            />
            <p>See Who Likes You & More!</p>
          </div>
        </div>
        <div className="paidFeature__pro">
          <div className="tinderPro">
            <img
              src={window.location.origin + "/images/TinderPro.svg"}
              alt=""
            />
            <p>Unlimited Likes & More!</p>
          </div>
        </div>
        <div className="GetMore">
          {/* <IconButton className="superlikes">
            <StarRateIcon fontSize="large" />
          </IconButton>
          <IconButton className="boosts">
            <FlashOnIcon fontSize="large" />
          </IconButton> */}
          <div className="GetMore__Boosts">
            <div className="getmore__contentsBoosts">
              <div className="paidIcons">
                <IconButton className="boosts">
                  <FlashOnIcon fontSize="medium" />
                </IconButton>
              </div>

              <h4>0 remaining</h4>
              <p>Get More Boosts</p>
            </div>
          </div>
          <div className="GetMore__SuperLikes">
            <div className="getmore__contentsSuperlikes">
              <div className="paidIcons">
                <IconButton className="superlikes">
                  <StarRateIcon fontSize="medium" />
                </IconButton>
              </div>
              <h4>0 remaining</h4>
              <p>Get More Super Likes</p>
            </div>
          </div>
        </div>

        <strong>ACCOUNT SETTINGS</strong>
        <div className="settingDivs ">
          <a href="#">Restore Purchases</a>
        </div>
        <div className="settingDivs constant_inputs">
          <a href="#">Email</a>
          <div className="constants">
            <p>bhatin626@gmail.com {`>>`}</p>
          </div>
        </div>
        <div className="settingDivs constant_inputs">
          <a href="#">Phone Number</a>
          <div className="constants">
            <p>+91-8290795842 {`>>`}</p>
          </div>
        </div>
        <div className="settingDivs">
          <a href="#">Promo Code</a>
        </div>
        <div className="comments">
          <p>Verified Phone Number and Email help secure your account.</p>
        </div>

        <strong>DISCOVERY SETTINGS</strong>
        <div className="settingDivs constant_inputs">
          <a href="#">Location</a>
          <div className="constants">
            <p>Bali,India {`>>`}</p>
          </div>
        </div>

        <div className="settingDivs settingDivs__distance withbutton">
          <div>
            <a href="#">Maximum Distance</a>
          </div>

          <div className="maxDistance">
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </div>
        </div>

        <div className="settingDivs constant_inputs">
          <a href="#">Looking for</a>
          <div className="constants">
            <p>Women {`>>`}</p>
          </div>
        </div>

        <div className="settingDivs settingDivs__distance withbutton">
          <div>
            <a href="#">Age Range</a>
          </div>

          <div className="maxDistance">
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </div>
        </div>

        <div className="settingDivs withbutton on_off">
          <a href="#">Global</a>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>

        <div className="settingDivs constant_inputs">
          <a href="#">Preferred Languages</a>
          <div className="constants">
            <p>English {`>>`}</p>
          </div>
        </div>
        <div className="comments">
          <p>
            Going global will allow you to see people from around the world
            after you’ve run out of profiles nearby.
          </p>
        </div>

        <div className="settingDivs withbutton on_off">
          <a href="#">Show me on Tinder</a>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="comments">
          <p>
            While turned off, you will not be shown in the card stack. You can
            still see and chat with your matches.
          </p>
        </div>

        <strong>WEB PROFILE</strong>
        <div className="settingDivs constant_inputs">
          <a href="#">Username</a>
          <div className="constants">
            <p>Naveen</p>
          </div>
        </div>
        <div className="comments">
          <p>
            Create a username. Share your username. Have people all over the
            world match with you right on Tinder.
          </p>
        </div>

        <strong>READ RECIEPTS</strong>
        <div className="settingDivs">
          <a href="#">Manage Read Reciepts</a>
        </div>

        <strong>ACTIVITY STATUS</strong>
        <div className="settingDivs">
          <a href="#">Recently Active Status</a>
        </div>

        <strong>NOTIFICATIONS</strong>
        <div className="settingDivs">
          <a href="#">Email</a>
        </div>
        <div className="settingDivs">
          <a href="#">Push Notifications</a>
        </div>

        <strong>LANGUAGE</strong>
        <div className="settingDivs constant_inputs">
          <a href="#">Language</a>
          <div className="constants">
            <p>English</p>
          </div>
        </div>

        <strong>HELP & SUPPORT</strong>
        <div className="settingDivs constant_inputs">
          <a href="#">Help & support</a>
          <div className="constants">
            <p>{`>>`}</p>
          </div>
        </div>

        <strong>COMMUNITY</strong>
        <div className="settingDivs constant_inputs">
          <a href="#">Community Guidelines</a>
          <div className="constants">
            <p>{`>>`}</p>
          </div>
        </div>
        <div className="settingDivs constant_inputs">
          <a href="#">Safety & Policy Center</a>
          <div className="constants">
            <p>{`>>`}</p>
          </div>
        </div>
        <div className="settingDivs constant_inputs">
          <a href="#">Safety Tips</a>
          <div className="constants">
            <p>{`>>`}</p>
          </div>
        </div>

        <strong>LEGAL</strong>
        <div className="settingDivs">
          <a href="#">Privacy Settings</a>
        </div>
        <div className="settingDivs constant_inputs">
          <a href="#">Cookie Policy</a>
          <div className="constants">
            <p>{`>>`}</p>
          </div>
        </div>
        <div className="settingDivs constant_inputs">
          <a href="#">Privacy Policy</a>
          <div className="constants">
            <p>{`>>`}</p>
          </div>
        </div>
        <div className="settingDivs constant_inputs">
          <a href="#">Terms of Service</a>
          <div className="constants">
            <p>{`>>`}</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="settingDivs settingDivsButtons">
        <a href="#">Share Tinder</a>
      </div>
      <br />
      <br />
      <div className="settingDivs settingDivsButtons">
        <a href="#">Logout</a>
      </div>
      <br />
      <br />
      <div className="sidebar__tinderImage">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjtsPB5OGcYsy2a_o-nY_fZBtM4d4ysjkDgfCO90pfQHBaG5YpenXFVqbL_UJJD64EmVFH_TnwoXuSAK7dsDlXvRF43i3Vew&usqp=CAU&ec=45725304"
          alt="tinder"
        ></img>
        <p>Version 2.63.0</p>
      </div>

      <div className="settingDivs settingDivsButtons">
        <a href="#">Delete Account</a>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ProfileSidebar;
