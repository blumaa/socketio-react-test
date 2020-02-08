import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

export default function Messages({ messages }) {
  return (
    <List>
      {messages.flatMap((message, index) => [
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="http://placekitten.com/200/100" />
          </ListItemAvatar>
          <ListItemText primary={message} />
        </ListItem>,
        <Divider variant="inset" key={"divider-" + index}component="li" />
      ]).slice(0, -1)}
    </List>
  );
}
