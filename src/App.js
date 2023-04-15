import "./App.css";
import React from "react";
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import typography from "./typography";
import { IconButton,Box, AppBar,Toolbar,Container, Button, Typography, Link as MUILink, Stack, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Lending from "./components/Lending";
import Liquidate from "./components/Liquidate";
import Swap from "./components/Swap";
const drawerWidth = 240;
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileOpen:false,
    }
    this.theme = createTheme({typography});
    this.navbars = [
      {
        title:"Lending",
        link:"/"
      },
      {
        title:"Swap",
        link:"/swap"
      },
      {
        title:"Bridge",
        link:"/bridge"
      },
      {
        title:"Dashboard",
        link:"/dashboard"
      },
      {
        title:"NFT Lending",
        link:"/trading"
      },
    ];
    this.handleDrawer = this.handleDrawer.bind(this)
  }
  handleDrawer = ()=>{
    this.setState({mobileOpen:!this.state.mobileOpen});
  }
  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <Box>
          <AppBar
            position="static"
            sx={{height:60, backgroundColor: "#0F131F" }}
          >
            <Toolbar
              sx={{
                justifyContent: "space-between",
                px:{md:3, sm:2, xs:1},
                my:"auto"
              }}
            >
              <Box sx={{display:{xs:"none",md:"flex"}, alignItems:"center"}}>
                <Box display="flex" alignItems="center">
                  <Box component="img" src="logo.png" width={40} height={40} />
                  <Box component="p" color="white" fontWeight="700" fontSize="22px" sx={{ml:"10px"}}>
                    zkBank
                  </Box>
                </Box>
                <Box sx={{ml:3,display:{xs:'none', md:"block"}}}>
                  {
                    this.navbars.map((ele,index)=>
                      <Box sx={{ml:{lg:6, md:3, sm:1}, fontSize:"14px", textDecoration:"none"}} color={this.props.location.pathname===ele.link?"white":"#88B8D8"} component={Link} key={index} to={ele.link}>{ele.title}</Box>
                    )
                  }
                </Box>
              </Box>
              <Box sx={{display: { md: 'none' },}}>
                <IconButton
                  onClick={this.handleDrawer}
                  sx={{color:"white" }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box display="flex">
                <Button sx={{bgcolor:"#141929",color:"#88B8D8",minWidth:42, width:42, height:42, borderRadius:"9px", mr:1}}>
                  <PublicIcon />
                </Button>
                <Button sx={{display:{md:"block", xs:"none"}, bgcolor:"#141929",color:"#88B8D8",minWidth:42, width:42, height:42, borderRadius:"9px", mr:1}}>
                  <HelpOutlineIcon />
                </Button>
                <Button sx={{bgcolor:"#141929",color:"#88B8D8", height:42, borderRadius:"9px", fontWeight:500, mr:1}}>
                  Mainnet - NodeReak <KeyboardArrowDownIcon />
                </Button>
                <Button sx={{P:1,height:"42px", bgcolor:"#88B8D8", borderRadius:"9px", fontFamily:"Inter", color:"black", fontSize:"14px"}}>Connect <Box sx={{display:{sm:"block", xs:"none"}}}>&nbsp;Wallet</Box></Button>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="temporary"
            // anchor="right"
            open={this.state.mobileOpen}
            onClose={this.handleDrawer}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor:"#0F131F" },
            }}
          >
            <Box>
              <List sx={{color:"white", "& .MuiDivider-root":{bgcolor:"white"}}}>
                <Box display="flex" alignItems="center" sx={{p:2}}>
                  <Box component="img" src="logo.png" width={40} height={40} />
                  <Box component="p" color="white" fontWeight="700" fontSize="22px" sx={{ml:"10px"}}>
                    zkBank
                  </Box>
                </Box>

                <Divider />
                {this.navbars.map((ele, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton component={Link} to={ele.link} onClick={this.handleDrawer}>
                      <ListItemText primary={ele.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton onClick={this.handleDrawer}>
                    <ListItemText primary="Document" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List>
                
              </List>
            </Box>
          </Drawer>
          <Container maxWidth="1920px">
            <Routes>
              <Route path="/" element={<Lending />}/>
              <Route path="/liquidate" element={<Liquidate />}/>
              <Route path="/swap" element={<Swap />}/>
              <Route path="/bridge" element={<Swap />}/>
              <Route path="/dashboard" element={<Swap />}/>
              <Route path="/trading" element={<Swap />}/>
            </Routes>
          </Container>
        </Box>
      </ThemeProvider>
    );
  }
}
const withHook = (Component) => {
  return (props) => {
    const location = useLocation();
    return (
        <Component location={location} {...props} />
    )
  }
}

export default withHook(App);
