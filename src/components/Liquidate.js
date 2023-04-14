import React from "react";
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { Switch, Step, StepLabel, Tab,Tabs,Dialog,DialogContent,DialogActions,DialogTitle, Table, TableHead,TableRow,TableCell,TableBody, InputAdornment, OutlinedInput,Box, AppBar,Toolbar,IconButton, Container, Button, Typography, Link as MUILink, Stack } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Info } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: "#141929",
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: "#141929",
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
class Liquidate extends React.Component {
  
  constructor(props){
    super(props);
    this.header = [
      {
        title:"User",
        color:"white",
        direction:"center",
        width:"15%",
        // function:sort
      },
      {
        title:"Profile",
        color:"white",
        direction:"center",
        width:"15%",
        // function:sort
      },
      {
        title:"Borrowed Asset(s)",
        color:"#88B8D8",
        direction:"center",
        width:"10%",
        // function:sort
      },
      {
        title:"Borrowed Value",
        color:"#88B8D8",
        direction:"right",
        width:"15%",
        sort:true,
        // function:sort
      },
      {
        title:"Deposited Asset(s)",
        color:"#88B8D8",
        direction:"center",
        width:"15%",
        // function:sort
      },
      {
        title:"Deposited Value",
        color:"#88B8D8",
        direction:"right",
        width:"5%",
        sort:true,
        // function:sort
      },
      {
        title:"Risk Factor",
        color:"#88B8D8",
        direction:"right",
        width:"10%",
        // function:sort
      },
      {
        title:"Operation",
        color:"#88B8D8",
        direction:"center",
        width:"10%",
        // function:sort
      },
    ];
    this.data = [
      {
        user:"0xD6eab0F695cc76aC7702702ea008fbf43eE3C951",
        profile:"Main Account",
        borrowedAsset:"mark.png",
        borrowedValue:"1.21512512344",
        depositedAsset:"mark.png",
        depositedValue:"1.21512512344",
        riskFactor:"124",
      },
      {
        user:"0xD6eab0F695cc76aC7702702ea008fbf43eE3C951",
        profile:"Main Account",
        borrowedAsset:"mark.png",
        borrowedValue:"1.21512512344",
        depositedAsset:"mark.png",
        depositedValue:"1.21512512344",
        riskFactor:"124",
      },
      {
        user:"0xD6eab0F695cc76aC7702702ea008fbf43eE3C951",
        profile:"Main Account",
        borrowedAsset:"mark.png",
        borrowedValue:"1.21512512344",
        depositedAsset:"mark.png",
        depositedValue:"1.21512512344",
        riskFactor:"124",
      },
    ];
  }
  render() {
    return (
      <Box sx={{mt:3, color:"white", textAlign:"center"}}>
        <Typography variant="h3" sx={{mt:5}}>Liquidate</Typography>
        <Typography variant="h6" sx={{mt:5, color:"#88B8D8"}}>Liquidate to earn extra reward!</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{mt:3}}>
          <Typography>Ignore Small Debt</Typography>
          <IOSSwitch sx={{ m: 1 }} defaultChecked />
        </Box>
        {/* Table Section */}
        <Box sx={{mt:3, border:"1px solid #141929", borderRadius:"7px"}}>
          <Table sx={{ }}>
            <TableHead sx={{bgcolor:"#0A141F"}}>
              <TableRow>
                {
                  this.header.map((ele,index)=>{
                    return (<TableCell key={index} sx={{px:1,border:"none",color:ele.color, width:ele.width}} >
                      <Box sx={{display:"flex", justifyContent:ele.direction, fontSize:"15px"}}>
                        {ele.title}
                        {ele.sort?
                        (<Box sx={{display:"flex", flexDirection:'column'}}>
                        <ExpandLessIcon fontSize="12px" sx={{mb:"-2px"}}/>
                        <ExpandMoreIcon fontSize="12px" sx={{mt:"-2px"}}/>
                        </Box>):<Box></Box>
                        }
                      </Box>
                      </TableCell>);
                  })
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {this.data.map((row,index) => (
                <TableRow
                  key={index}
                  sx={{ 'td, th': { border: 0 }, cursor:"pointer" }}
                  onClick={this.handleOpen}
                >
                  <TableCell align="center" component="th" scope="row" sx={{color:"white", px:1}}>
                    <Typography variant="h6" color="#80ADCB">{row.user.substring(0,5)}....{row.user.substring(row.user.length-5)}</Typography>
                  </TableCell>
                  <TableCell align="center"><Typography variant="h6" color="white">{row.profile}</Typography></TableCell>
                  <TableCell align="center"><Box component="img" src={row.borrowedAsset} /></TableCell>
                  <TableCell align="right"><Typography variant="h6" color="white">${row.borrowedValue}</Typography></TableCell>
                  <TableCell align="center"><Box component="img" src={row.depositedAsset} /></TableCell>
                  <TableCell align="right"><Typography variant="h6" color="white">${row.depositedValue}</Typography></TableCell>
                  <TableCell align="right"><Typography variant="h6" color="#FF6959">{row.riskFactor}%</Typography></TableCell>
                  <TableCell align="center">
                    <Button variant="contained" sx={{bgcolor:"#88B8D8", color:"black", borderRadius:"9px"}}>Liquidate</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    );
  }
}

export default Liquidate;
