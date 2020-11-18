import React from "react";
import SidebarRow from "../sidebarRow";
import "./styles/sidebar.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://avatars0.githubusercontent.com/u/28592247?s=460&u=2fee7175fd4c94c66db598f27da43be2f0a0c6e9&v=4"
        title="Ravi Kumar"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Video" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="See More" />

      <SidebarRow />
    </div>
  );
}
