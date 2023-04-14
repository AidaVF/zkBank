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

class Swap extends React.Component {
  
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Box sx={{mt:3, color:"white", textAlign:"center"}}>
        <Typography variant="h1" sx={{mt:5}}>Comming Soon</Typography>
      </Box>
    );
  }
}

export default Swap;
