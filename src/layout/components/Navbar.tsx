import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, InputBase, Box, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";
import { style } from "./Navbar.style";
import { links } from "./Navbar.config";



const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={style.toolbar}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {isMobile && (
              <IconButton edge="start" color="inherit" onClick={toggleDrawer}><MenuIcon /></IconButton>
            )}

            {/* Search Bar */}
            {!isMobile && (
              <Box sx={style.box}>
                <SearchIcon sx={{ color: "white" }} />
                <InputBase  placeholder="Search saree, kurti or other things…" sx={style.input}/>
              </Box>
            )}
          </Box>

          <Typography variant="h6" sx={style.logo} > B2C Marketplace </Typography>

          {!isMobile && (
            <Box>
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Button color="inherit"
                    key={link.name}
                    component={Link}
                    to={link.path}
                    sx={{ textTransform: "none",
                      fontWeight: isActive ? "bold" : "normal",
                      borderBottom: isActive ? "2px solid white" : "none"}}
                  >
                    {link.name}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <ListItem key={link.name} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  onClick={toggleDrawer}
                  selected={isActive} // this handles the highlighting
                  sx={{
                    backgroundColor: isActive ? "#f5f5f5" : "transparent",
                  }}
                >
                  <ListItemText
                    primary={link.name}
                    primaryTypographyProps={{
                      fontWeight: isActive ? "bold" : "normal",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
