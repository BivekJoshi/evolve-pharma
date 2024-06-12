import React, { useState } from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import logo from "../../assets/FooterLogo.png";

const LandNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = (
    <List>
      <ListItem button>
        <ListItemIcon><PermIdentityOutlinedIcon /></ListItemIcon>
        <ListItemText primary="Hello, Log in" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><NewReleasesOutlinedIcon /></ListItemIcon>
        <ListItemText primary="Offers" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><ShoppingCartOutlinedIcon /></ListItemIcon>
        <ListItemText primary="Cart" />
      </ListItem>
    </List>
  );

  return (
    <>
      <Box sx={{ boxShadow: "0 4px 10px -2px rgba(0,0,0,0.1)" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "14px 16px", backgroundColor: "#FFFF" }}>
          <div>
            <div style={{ width: "150px", height: "35px" }}>
              <img src={logo} style={{ width: "100%", height: "100%" }} alt="Logo" />
            </div>
          </div>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {menuItems}
              </Drawer>
            </>
          ) : (
            <div style={{ display: "flex", gap: "2rem", alignItems: "center", color: "#7c7d82" }}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                  <PermIdentityOutlinedIcon />
                  <div>Hello, Log in</div>
                </div>
                <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                  <NewReleasesOutlinedIcon />
                  <div>Offers</div>
                </div>
                <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                  <ShoppingCartOutlinedIcon />
                  <div>Cart</div>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Box>
    </>
  );
}

export default LandNavbar;
