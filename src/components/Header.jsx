import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Aruku App
          </Typography>
          {/* <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          > */}
          <Button
            component={NavLink}
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? 900 : "normal",
            })}
            color="inherit"
          >
            Walk Settings
          </Button>
          {/* </NavLink>
          <NavLink
            to="/init"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          > */}
          <Button
            component={NavLink}
            to="/Init"
            style={({ isActive }) => ({
              fontWeight: isActive ? 900 : "normal",
            })}
            color="inherit"
          >
            Init Settings
          </Button>
          {/* </NavLink> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
