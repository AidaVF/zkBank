import React from "react";
import { Link } from 'react-router-dom';
import { Stepper, Step, StepLabel, Tab,Tabs,Dialog,DialogContent,DialogTitle, Table, TableHead,TableRow,TableCell,TableBody, InputAdornment, OutlinedInput,Box, Button, Typography, Link as MUILink, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "black",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#66FF88",
  },
}));
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 3px)',
    right: 'calc(50% + 3px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'white',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'white',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#131929",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: "white",
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: 'white',
  }),
  zIndex:100,
  '& .QontoStepIcon-ActiveIcon': {
    width: 14,
    height: 14,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {active ? (
        <CheckIcon className="QontoStepIcon-ActiveIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

// QontoStepIcon.propTypes = {
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   completed: PropTypes.bool,
// };
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ mt: 3, overflow:"hidden" }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}



class Infos extends React.Component {
  constructor(props){
    super(props);
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
class Lending extends React.Component {
  
  constructor(props){
    super(props);
    this.header = [
      {
        title:"AssetName",
        color:"white",
        direction:"left",
        width:"15%",
        // function:sort
      },
      {
        title:"LTV",
        color:"white",
        direction:"right",
        width:"10%",
        // function:sort
      },
      {
        title:"Deposit APY",
        color:"#88B8D8",
        direction:"right",
        width:"15%",
        // function:sort
      },
      {
        title:"Market Size",
        color:"#88B8D8",
        direction:"right",
        width:"17%",
        // function:sort
      },
      {
        title:"Borrow APY",
        color:"#88B8D8",
        direction:"right",
        width:"12%",
        // function:sort
      },
      {
        title:"Total Borrowed",
        color:"#88B8D8",
        direction:"right",
        width:"20%",
        // function:sort
      },
      {
        title:"Wallet",
        color:"#88B8D8",
        direction:"right",
        width:"10%",
        // function:sort
      },
    ];
    this.data = [
      {
        assetName:"zUSDC",
        price:"0.999959",
        ltv:"80",
        depositApy:"0.22",
        marketSize:"160,900",
        marketSizeMoney:"160,002",
        borrowApy:"1.57",
        totalBorrowed:"22,433",
        totalBorrowedMoney:"22,002",
        wallet:"0",
        walletMoney:"0"
      },
      {
        assetName:"zUSDC",
        price:"0.999959",
        ltv:"80",
        depositApy:"0.22",
        marketSize:"160,900",
        marketSizeMoney:"160,002",
        borrowApy:"1.57",
        totalBorrowed:"22,433",
        totalBorrowedMoney:"22,002",
        wallet:"0",
        walletMoney:"0"
      },
      {
        assetName:"zUSDC",
        price:"0.999959",
        ltv:"80",
        depositApy:"0.22",
        marketSize:"160,900",
        marketSizeMoney:"160,002",
        borrowApy:"1.57",
        totalBorrowed:"22,433",
        totalBorrowedMoney:"22,002",
        wallet:"0",
        walletMoney:"0"
      },
    ];
    this.steps = ["0%","25%","50%","75%","100%",];
    this.state = {
      open:false,
      tab: 0,
    }
    this.handleTab = this.handleTab.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleClose = ()=>{
    this.setState({open:false});
  }
  handleOpen = ()=>{
    this.setState({open:true});
  }
  handleTab = (event, newValue) => {
    this.setState({
      tab: newValue,
    });
  };  render() {
    return (
      <Stack direction={{sm:"row", xs:"column"}} rowGap={2} columnGap={2} sx={{mt:3}}>
        {/* Table Section */}
        <Box flex={4}>
          <Stack direction={{sm:"row", xs:"column"}} justifyContent="space-between">
            <Stack direction={{sm:"row", xs:"column"}} rowGap={1} columnGap={1}>
              <Infos title="Current Market Size:" value="$950K" />
              <Infos title="Total Borrowed:" value="$950K" />
              <Infos title="Lent Out:" value="15.2%" />
            </Stack>
            <Box component={Link} to='/liquidate' sx={{color:"#88B8D8", textDecoration:"none",width:"96px",height:"41px",bgcolor:"#0A0C14",border:"1px solid #88B8D8", borderRadius:"7px", display:"flex", justifyContent:"center", alignItems:"center"}}>Liquidate</Box>
          </Stack>
          <Box sx={{mt:3, border:"1px solid #141929", borderRadius:"7px"}}>
            <Box sx={{bgcolor:"#0A141F"}}>
              <Typography variant="h6" color="white" sx={{py:"14px", pl:2}}>Assets</Typography>
            </Box>
            <Box sx={{p:"20px"}}>
              <OutlinedInput
                size="small"
                sx={{minWidth:"250px", width:"50%",color:"#88B8D8",bgcolor:"#141929", "& fieldset":{border:"none"}, "& input::placeholder":{color:'#88B8D8'}}}
                placeholder="Search token"
                startAdornment={<InputAdornment position="start"><SearchIcon sx={{color:"#88B8D8"}} /></InputAdornment>}
              />
              <Table sx={{ }}>
                <TableHead>
                  <TableRow>
                    {
                      this.header.map((ele,index)=>{
                        return (<TableCell key={index} sx={{px:1,border:"none",color:ele.color, width:ele.width}} >
                          <Box sx={{display:"flex", justifyContent:ele.direction, fontSize:"15px"}}>
                            {ele.title}
                            <Box sx={{display:"flex", flexDirection:'column'}}>
                            <ExpandLessIcon fontSize="12px" sx={{mb:"-2px"}}/>
                            <ExpandMoreIcon fontSize="12px" sx={{mt:"-2px"}}/>
                            </Box>
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
                      <TableCell component="th" scope="row" sx={{color:"white", px:1}}>
                        <Box display="flex" gap={1}>
                          <Box component="img" src="mark.png" alt={row.assetName} />
                          <Box display="flex" flexDirection="column">
                            <Typography variant="h6" color="white">{row.assetName}</Typography>
                            <Typography variant="subtitle2" color="#88B8D8">${row.price}</Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="right"><Typography variant="h6" color="white">{row.ltv}%</Typography></TableCell>
                      <TableCell align="right"><Typography variant="h6" color="#66FF88">{row.depositApy}%</Typography></TableCell>
                      <TableCell align="right">
                        <Box display="flex" flexDirection="column">
                          <Typography variant="h6" color="white">{row.marketSize + " " + row.assetName}</Typography>
                          <Typography variant="subtitle2" color="#88B8D8">${row.marketSizeMoney}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right"><Typography variant="h6" color="#FF6959">{row.borrowApy}%</Typography></TableCell>
                      <TableCell align="right">
                        <Box display="flex" flexDirection="column">
                          <Typography variant="h6" color="white">{row.totalBorrowed} USDC</Typography>
                          <Typography variant="subtitle2" color="#88B8D8">${row.totalBorrowedMoney}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Box display="flex" flexDirection="column">
                          <Typography variant="h6" color="white">{row.wallet} USDC</Typography>
                          <Typography variant="subtitle2" color="#88B8D8">${row.walletMoney}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
        </Box>

        {/* Account Section */}
        <Box flex={1}>
          <Box sx={{border:"1px solid #141929", borderRadius:"7px"}}>
            <Box display="flex" justifyContent="space-between" sx={{bgcolor:"#0A141F", p:2}}>
              <Typography variant="h6" color="white">Account</Typography>
              <Typography variant="subtitle2" color="#88B8D8">Connect Wallet</Typography>
            </Box>
            <Box sx={{p:2}}>
              <Box display="flex" gap={1}>
                <Box sx={{borderRadius:"7px",border:"1px solid #141929", textAlign:"center", p:1}}>
                  <Typography variant="subtitle2" color="#88B8D8">APY</Typography>
                  <Typography variant="h6" color="#66FF88">0.00%</Typography>
                </Box>
                <Box sx={{borderRadius:"7px",border:"1px solid #141929", textAlign:"center", p:1}}>
                  <Typography variant="subtitle2" color="#88B8D8">Borrowed</Typography>
                  <Typography variant="h6" color="#66FF88">0.00%</Typography>
                </Box>
                <Box sx={{borderRadius:"7px",border:"1px solid #141929", textAlign:"center", p:1}}>
                  <Typography variant="subtitle2" color="#88B8D8">Risk Factor</Typography>
                  <Typography variant="h6" color="#66FF88">0.00%</Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" sx={{mt:1}}>
                <Typography variant="h6" color="white">Borrowing Power</Typography>
                <Typography variant="h6" color="#FF6959">22.34%</Typography>
              </Box>
              <Box sx={{mt:1}}>
                <BorderLinearProgress  variant="determinate" value={64.5}/>
              </Box>
              <Box display="flex" justifyContent="space-between" sx={{mt:1}}>
                <Typography variant="subtitle2" color="#88B8D8">Available</Typography>
                <Typography variant="h6" color="white">65.45%</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" sx={{mt:1}}>
                <Typography variant="subtitle2" color="#88B8D8">Risk Factor</Typography>
                <Typography variant="h6" color="#FF6959">45.65%</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{border:"1px solid #141929", borderRadius:"7px", mt:2}}>
            <Box display="flex" justifyContent="space-between" sx={{bgcolor:"#0A141F", p:2}}>
              <Typography variant="h6" color="white">Deposit</Typography>
              <Typography variant="h6" color="white">$11.22</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{p:2}}>
              <Box display="flex" gap={1}>
                <Box component="img" src="mark.png" alt="zUSDC" />
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6" color="white">zUSDC</Typography>
                  <Typography variant="subtitle2" color="#88B8D8">$0.999959</Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" textAlign="right">
                <Typography variant="h6" color="white">11.22 USDC</Typography>
                <Typography variant="subtitle2" color="#88B8D8">$11.22</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{border:"1px solid #141929", borderRadius:"7px", mt:2}}>
            <Box display="flex" justifyContent="space-between" sx={{bgcolor:"#0A141F", p:2}}>
              <Typography variant="h6" color="white">Borrow</Typography>
              <Typography variant="h6" color="white">$11.22</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{p:2}}>
              <Box display="flex" gap={1}>
                <Box component="img" src="mark.png" alt="zUSDC" />
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6" color="white">zUSDC</Typography>
                  <Typography variant="subtitle2" color="#88B8D8">$0.999959</Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" textAlign="right">
                <Typography variant="h6" color="white">11.22 USDC</Typography>
                <Typography variant="subtitle2" color="#88B8D8">$11.22</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        
        {/* Dialog Section */}
        {/* <Dialog maxWidth="xs" onClose={this.handleClose} open={this.state.open} sx={{border:"1px solid #141929", borderRadius:"7px"}}> */}
        <Dialog minWidth="sm" maxWidth="600px" sx={{"& .MuiPaper-root":{width:"600px", borderRadius:"7px"}}} onClose={this.handleClose} open={this.state.open} >
          <DialogTitle bgcolor="#090C13" sx={{p:3, display:"flex", justifyContent:"space-between"}}>
            <Typography variant="h4" fontWeight="700" color="white">USD Coin (wormhole)</Typography>
            <CloseIcon sx={{color:"#88B8D8", cursor:"pointer"}} onClick={this.handleClose}/>
          </DialogTitle>
          <DialogContent sx={{bgcolor:"#0F131F",color:"white"}}>
            <Tabs value={this.state.tab} onChange={this.handleTab} sx={{"& .MuiTabs-indicator":{bgcolor:"white"}}}>
              <Tab label="Deposit" {...a11yProps(0)} sx={{ width: "25%",color: "#88B8D8","&.Mui-selected": {color: "#fff",},}}/>
              <Tab label="Withdraw" {...a11yProps(1)} sx={{ width: "25%",color: "#88B8D8","&.Mui-selected": {color: "#fff",},}}/>
              <Tab label="Borrow" {...a11yProps(2)} sx={{ width: "25%",color: "#88B8D8","&.Mui-selected": {color: "#fff",},}}/>
              <Tab label="Repay" {...a11yProps(3)} sx={{ width: "25%",color: "#88B8D8","&.Mui-selected": {color: "#fff",},}}/>
            </Tabs>
            <TabPanel value={this.state.tab} index={0}>
              <Box>
                <OutlinedInput
                    value="zUSDC"
                    readOnly
                    sx={{textAlign:"center",width:"100%",color:"white",bgcolor:"#141929", "& fieldset":{border:"none"}, "& input":{textAlign:'center'}}}
                  />
                <Box sx={{mt:2, display:"flex", justifyContent:"space-between"}}>
                  <Typography variant="subtitle2" color="#88B8D8">Max: 0 zUSDC</Typography>
                  <Box display="flex" gap={1}>
                    <Box sx={{p:1,borderRadius:"7px",border:"1px solid #88B8D8", fontSize:"14px", color:"#88B8D8"}}>Half</Box>
                    <Box sx={{p:1,borderRadius:"7px",border:"1px solid #88B8D8", fontSize:"14px", color:"#88B8D8"}}>max</Box>
                  </Box>
                </Box>
                <Box sx={{mt:2, mx:"-7%", overflowX:"hidden"}}>
                  <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
                    {this.steps.map((label) => (
                      <Step key={label} sx={{px:0}}>
                        <StepLabel StepIconComponent={QontoStepIcon} sx={{"& .MuiStepLabel-labelContainer .MuiStepLabel-label":{color:"#88B8D8", mt:1}}}>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
                <Box display="flex" justifyContent="space-between" sx={{mt:2}}>
                  <Typography variant="h6" color="#88B8D8">Available</Typography>
                  <Typography variant="h6" color="white">11.22 zUSDC</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" sx={{mt:2}}>
                  <Typography variant="h6" color="#88B8D8">APY</Typography>
                  <Typography variant="h6" color="#66FF88">0.22%</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" sx={{mt:2}}>
                  <Typography variant="h6" color="#88B8D8">Wallet</Typography>
                  <Typography variant="h6" color="white">0 zUSDC</Typography>
                </Box>
                <Button sx={{mt:2, width:"100%", bgcolor:"#58809A", color:"black", borderRadius:"10px", textTransform:"none"}} variant="contained">Please input a valid number</Button>
                <Button sx={{mt:2, width:"100%", color:"#88B8D8"}}>More Info <ExpandMoreIcon /></Button>
              </Box>
            </TabPanel>
            <TabPanel value={this.state.tab} index={1}>
              <Box>
                <OutlinedInput
                    value="zUSDC"
                    sx={{textAlign:"center",width:"100%",color:"white",bgcolor:"#141929", "& fieldset":{border:"none"}}}
                  />
                <Box sx={{mt:2, display:"flex", justifyContent:"space-between"}}>
                  <Typography variant="subtitle2" color="#88B8D8">Available: 2.12412 zUSDC</Typography>
                  <Box display="flex" gap={1}>
                    <Box sx={{p:1,borderRadius:"7px",border:"1px solid #88B8D8", fontSize:"14px", color:"#88B8D8"}}>Half</Box>
                    <Box sx={{p:1,borderRadius:"7px",border:"1px solid #88B8D8", fontSize:"14px", color:"#88B8D8"}}>max</Box>
                  </Box>
                </Box>
                <Box sx={{mt:2, mx:"-7%", overflowX:"hidden"}}>
                  <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
                    {this.steps.map((label) => (
                      <Step key={label} sx={{px:0}}>
                        <StepLabel StepIconComponent={QontoStepIcon} sx={{"& .MuiStepLabel-labelContainer .MuiStepLabel-label":{color:"#88B8D8", mt:1}}}>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
                <Box display="flex" justifyContent="space-between" sx={{mt:2}}>
                  <Typography variant="h6" color="#88B8D8">Wallet</Typography>
                  <Typography variant="h6" color="white">5.423 USDC</Typography>
                </Box>
                <Button sx={{mt:2, width:"100%", bgcolor:"#58809A", color:"black", borderRadius:"10px", textTransform:"none"}} variant="contained">Please input a valid number</Button>
                <Button sx={{mt:2, width:"100%", color:"#88B8D8"}}>More Info <ExpandMoreIcon /></Button>
              </Box>
            </TabPanel>
            <TabPanel value={this.state.tab} index={2}>
              <Box>
                <OutlinedInput
                    value="zUSDC"
                    readOnly
                    sx={{textAlign:"center",width:"100%",color:"white",bgcolor:"#141929", "& fieldset":{border:"none"}, "& input":{textAlign:'center'}}}
                  />
                <Box sx={{mt:2, display:"flex", justifyContent:"space-between"}}>
                  <Typography variant="subtitle2" color="#88B8D8">Max: 0 zUSDC</Typography>
                  <Box display="flex" gap={1}>
                    <Box sx={{p:1,borderRadius:"7px",border:"1px solid #88B8D8", fontSize:"14px", color:"#88B8D8"}}>Half</Box>
                    <Box sx={{p:1,borderRadius:"7px",border:"1px solid #88B8D8", fontSize:"14px", color:"#88B8D8"}}>max</Box>
                  </Box>
                </Box>
                <Box sx={{mt:2, mx:"-7%", overflowX:"hidden"}}>
                  <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
                    {this.steps.map((label) => (
                      <Step key={label} sx={{px:0}}>
                        <StepLabel StepIconComponent={QontoStepIcon} sx={{"& .MuiStepLabel-labelContainer .MuiStepLabel-label":{color:"#88B8D8", mt:1}}}>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
                <Box display="flex" justifyContent="space-between" sx={{mt:2}}>
                  <Typography variant="h6" color="#88B8D8">APY</Typography>
                  <Typography variant="h6" color="#FF6959">6.30%</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" sx={{mt:2}}>
                  <Typography variant="h6" color="#88B8D8">Borrow Fee</Typography>
                  <Typography variant="h6" color="#FF6959">-0.00 zUSDC</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" sx={{mt:2}}>
                  <Typography variant="h6" color="#88B8D8">Your Margin</Typography>
                  <Typography variant="h6" color="white">$8.214</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" sx={{mt:2}}>
                  <Typography variant="h6" color="#88B8D8">Wallet</Typography>
                  <Typography variant="h6" color="white">5.423 USDC</Typography>
                </Box>
                <Button sx={{mt:2, width:"100%", bgcolor:"#58809A", color:"black", borderRadius:"10px", textTransform:"none"}} variant="contained">Please input a valid number</Button>
                <Button sx={{mt:2, width:"100%", color:"#88B8D8"}}>More Info <ExpandMoreIcon /></Button>
              </Box>
            </TabPanel>
            <TabPanel value={this.state.tab} index={3}>
              <Box>
                <OutlinedInput
                    value="zUSDC"
                    sx={{textAlign:"center",width:"100%",color:"white",bgcolor:"#141929", "& fieldset":{border:"none"}}}
                  />
                <Box sx={{mt:2, display:"flex", justifyContent:"space-between"}}>
                  <Typography variant="subtitle2" color="#88B8D8">Available: 2.12412 zUSDC</Typography>
                  <Box display="flex" gap={1}>
                    <Box sx={{p:1,borderRadius:"7px",border:"1px solid #88B8D8", fontSize:"14px", color:"#88B8D8"}}>Half</Box>
                    <Box sx={{p:1,borderRadius:"7px",border:"1px solid #88B8D8", fontSize:"14px", color:"#88B8D8"}}>max</Box>
                  </Box>
                </Box>
                <Box sx={{mt:2, mx:"-7%", overflowX:"hidden"}}>
                  <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
                    {this.steps.map((label) => (
                      <Step key={label} sx={{px:0}}>
                        <StepLabel StepIconComponent={QontoStepIcon} sx={{"& .MuiStepLabel-labelContainer .MuiStepLabel-label":{color:"#88B8D8", mt:1}}}>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
                <Box display="flex" justifyContent="space-between" sx={{mt:2}}>
                  <Typography variant="h6" color="#88B8D8">Wallet</Typography>
                  <Typography variant="h6" color="white">5.423 USDC</Typography>
                </Box>
                <Button sx={{mt:2, width:"100%", bgcolor:"#58809A", color:"black", borderRadius:"10px", textTransform:"none"}} variant="contained">Please input a valid number</Button>
                <Button sx={{mt:2, width:"100%", color:"#88B8D8"}}>More Info <ExpandMoreIcon /></Button>
              </Box>
            </TabPanel>
          </DialogContent>
        </Dialog>
      </Stack>
    );
  }
}

export default Lending;
