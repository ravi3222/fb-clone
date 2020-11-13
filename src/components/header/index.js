import React from "react";
import "./styles/header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__center">
        <div
          className="header__option 
        header__option--active"
        >
          <HomeIcon fontsize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontsize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontsize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontsize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontsize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Ravi</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownCircleIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
