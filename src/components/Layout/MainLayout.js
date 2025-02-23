import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Grid2, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import magnus from '../../assets/icons/magnus.png'
import { main_branch_list } from "../../data/Menu/MainList";
import MyContext from "../Context/MyContext";


const drawerWidth = 300;


function MainLayout({ children, props }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const list = main_branch_list
  const {branch, setBranch, isUzbek, setIsUzbek} = useContext(MyContext)


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const currentPath = location.pathname;

  useEffect(() => {
    if(branch == "") {
      setBranch(list[0])
    }
  }, [])

  const drawer = (
    <Box sx={{ backgroundColor: "#e8e9eb", height: "100vh" }}>
      <Toolbar sx={{ backgroundColor: "#e8e9eb", color: "black" }}>
        <Box sx={{width: '45px', marginRight: 2}}>
            <img src={magnus} alt="" />
        </Box>
        <Typography variant="h5" textAlign={"center"}>
          Magnus
        </Typography>
      </Toolbar>
      <Divider />
      <Grid2 container>
        <Grid2 item size={2}>
          {list?.map((item) => {
            return (
              <Box
                key={item.nameUZB}
                padding={1}
                sx={{ borderRight: "1px solid grey" }}
              >
                <Box
                  sx={{
                    cursor: "pointer",
                    "&:hover img": {
                      transform: "scale(1.1)", // Increase size by 10%
                      transition: "transform 0.3s ease-in-out", // Smooth transition
                    },
                  }}
                  onClick={() => {
                    navigate(item.link);
                    console.log("Clicked item:", item); // Debugging
                    setBranch(item);
                  }}
                  className={
                    currentPath.startsWith(item.link) ? "active" : "inactive"
                  }
                >
                  <img src={item.icon} alt="" />
                </Box>
              </Box>
            );
          })}
        </Grid2>
        <Grid2 item size={10} sx={{ paddingX: 2 }}>
          <Typography variant="h6" marginTop={3}>
            {isUzbek? branch.nameUZB : branch.nameRUS}
          </Typography>
          <Typography fontSize={10} marginBottom={3}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae atque mollitia laudantium perferendis omnis eos.
          </Typography>

          {branch?.list?.map((listItem) => {
            return (
              <Box
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "blue", // Changes text color to blue on hover
                  },
                }}
              >
                <Typography marginTop={1}>{isUzbek? listItem.nameUZB : listItem.nameRUS}</Typography>
                <Divider />
              </Box>
            );
          })}
        </Grid2>
      </Grid2>
    </Box>
  );

  //   const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { dm: `calc(100% - ${drawerWidth}px)` },
          ml: { dm: `${drawerWidth}px` },
          backgroundColor: "white",
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
        }}
      >
        <Toolbar display="flex">
        <Box display={"flex"} alignItems={"center"}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { xs: "block", lg: "none" } }}
              >
                <MenuIcon sx={{color: 'black', fontSize: '28px'}}/>
              </IconButton>
              
            </Box>
          <Box flex={1} >
            
              <Typography
                variant="h5"
                sx={{ color: "black", display: { xs: "block", lg: "none" } }}
                noWrap
                component="div"
                textAlign={'center'}

              >
                Magnus
              </Typography>
           
          </Box>

          <Box>
            <Button onClick={() => setIsUzbek(true)}>
              Uz
            </Button>
            <Button onClick={() => setIsUzbek(false)}>
              RU
            </Button>
          <IconButton  onClick={() => navigate("/")}>
            <LogoutIcon />
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { dm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            zIndex: 1200, // Set z-index for the permanent drawer as well
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              boxShadow: "5px 0px 15px rgba(0, 0, 0, 0.1)", // Add shadow on the right
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Toolbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingRight: 5,
          paddingTop: 9,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default MainLayout;
