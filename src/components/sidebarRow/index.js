import { Avatar } from "@material-ui/core";
import React from "react";
import "./styles/sidebarRow.css";

export default function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h3>{title}</h3>
    </div>
  );
}
