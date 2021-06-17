import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import menuItems from "providers/menuItems";

import { ListItemTextStyled, DivDrawerStyle } from "./styles";

import { useHistory } from "react-router-dom";

export default function TemporaryDrawer() {
  const history = useHistory();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const redirect = (item) => {
    history.push(item.link);
  };

  const list = (anchor) => (
    <DivDrawerStyle role="presentation" onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {menuItems.map((text, index) => (
          <ListItem button key={index} onClick={() => redirect(text)}>
            <ListItemTextStyled primary={text.text} />
          </ListItem>
        ))}
      </List>
    </DivDrawerStyle>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <i class="fas fa-bars"></i>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
