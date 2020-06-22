import React, { Component } from 'react';
import { Toolbar, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import './layouts.css';
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

class Menu extends Component {
    render() {
        return (
            <Drawer className="Drawer" variant="permanent">
                <Toolbar />
                <div className="DrawerContainer">
                    <List>
                        {["Menu item 1", "Menu item 2", "Menu item 3", "Menu item 4"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
       );
    }
}

export default Menu;