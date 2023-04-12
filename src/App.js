import "./App.css";
import React from "react";
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import typography from "./typography";
import { Box, AppBar,Toolbar,Container, Button, Typography, Link as MUILink, Stack } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Lending from "./components/Lending";

class Infos extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <Box>
        <Box display="inline-block" sx={{bgcolor:'#0A0C14',border:"1px solid #141929", borderRadius:"7px", px:"17px", py:"12px"}}>
          <Typography display="inline-block" lineHeight="17px" fontSize="14px" color="#88B8D8">
            {this.props.title}
          </Typography>
          <Typography display="inline-block" lineHeight="17px" fontSize="14px" color="white" sx={{ml:1}}>
            {this.props.value}
          </Typography>
        </Box>
      </Box>
    )
  }
}
class App extends React.Component {
  
  constructor(props){
    super(props);
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
        title:"Trading",
        link:"/trading"
      },
    ];
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
              <Box sx={{display:"flex", alignItems:"center"}}>
                <Box component="p" color="#88B8D8" fontWeight="700" fontSize="22px" sx={{ml:"10px",display:{xs:"none", sm:"block"}}}>
                  LOGO
                </Box>
                <Box sx={{ml:3}}>
                  {
                    this.navbars.map((ele,index)=>
                      <Box sx={{ml:{lg:6, md:3, sm:1}, fontSize:"14px", textDecoration:"none"}} color={this.props.location.pathname===ele.link?"white":"#88B8D8"} component={Link} key={index} to={ele.link}>{ele.title}</Box>
                    )
                  }
                </Box>
              </Box>
              <Box>
                <Button sx={{bgcolor:"#141929",color:"#88B8D8",minWidth:42, width:42, height:42, borderRadius:"9px", mr:1}}>
                  <PublicIcon />
                </Button>
                <Button sx={{bgcolor:"#141929",color:"#88B8D8",minWidth:42, width:42, height:42, borderRadius:"9px", mr:1}}>
                  <HelpOutlineIcon />
                </Button>
                <Button sx={{bgcolor:"#141929",color:"#88B8D8",minWidth:175, height:42, borderRadius:"9px", fontWeight:500, mr:1}}>
                  Mainnet - NodeReak <KeyboardArrowDownIcon />
                </Button>
                <Button sx={{ width:"150px", height:"42px", bgcolor:"#88B8D8", borderRadius:"9px", fontFamily:"Inter", color:"black", fontSize:"14px"}}>Connect Wallet</Button>
              </Box>
            </Toolbar>
          </AppBar>
          <Container maxWidth="1920px">
            <Routes>
              <Route path="/" element={<Lending />}/>
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
