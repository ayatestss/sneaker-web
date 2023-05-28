import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ViewCompact, List as ListIcon } from "@material-ui/icons";

function MyComponent() {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <ViewCompact />
        </ListItemIcon>
        <ListItemText primary="View" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="List" />
      </ListItem>
    </List>
  );
}

export default MyComponent;
