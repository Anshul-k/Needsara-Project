import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import CustDBLayout from '../../components/Dashboard/CustomerDB/CustDBLayout'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import { CardContent, Grid, LinearProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import dateFormat from 'dateformat';



// // // // // // // // // // // Styled Components Start // // // // // // // // // // //

const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  @media screen and (max-width: 1080px){
    flex-direction: column-reverse;
    margin-left: 6rem;
  }
`
const TabContainer = styled.div`
  display: flex;
  margin: 3rem;
  margin-top: 5rem;
  width: 100%;

  @media (max-width: 1080px){
    margin: 5rem;
  }
`
// const CardContainer = styled.div`
//     color: rgba(0, 0, 0, 0.87);
//     margin: 1rem;
//     width: 900px;
//     border: 0;
//     display: flex;
//     position: relative;
//     font-size: .875rem;
//     min-width: 0;
//     word-wrap: break-word;
//     background: #FFF;
//     box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
//     margin-top: 6rem;
//     border-radius: 6px;
//     margin-bottom: 30px;
//     flex-direction: column;

//     @media (max-width: 1080px){
//     margin: 6rem;
//   }
// `
// const CardHeader = styled.div`
//     padding: 1rem;
//     margin: -20px 25px 0 25px;
//     border-radius: 10px;
//     background: linear-gradient(60deg, #01bf71, #00A461);
//     box-shadow: 0 4px 20px 0 rgba(0,0,0,0.14), 0 7px 10px -5px rgb(156,39,176,0.4);
//     color: #fff;
//     position: relative;
// `
// const PprofileInfoContainer = styled.div`
//   padding: 0.5rem;
// `
// const ProfileCompletion = styled.div`

// `
// const LinkTo = styled(Link)`
//   text-decoration: none;
//   color: inherit;

//   :hover{
//     color: #01bf71;
//   }
// `
const RequestContainer = styled.div`
  padding: 0;
`
const RequestCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 2px 5px 6px 2px rgba(0,0,0,0.2);
  border-radius: 20px;
  padding: 1rem;
`
const RequestCardContent = styled.div`
  padding-left: 5px;
`
const SP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const SPCategoryContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0.3rem;

  @media screen and (max-width: 620px){
    flex-direction: column-reverse;
  }
`
const SPCategory = styled.div`
  font-size: 1.6rem;
  width: 75%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
  color: rgba(56, 211, 159,0.8);
`
const SPName = styled.div`
  font-size: 0.85rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgba(0,0,0,0.8);
`
const SPContactNumber = styled.div`
  font-size: 0.85rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgba(0,0,0,0.8);
`
const SPAddress = styled.div`
  font-size: 0.85rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgba(0,0,0,0.8);
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .button{
    margin: 1rem;
    margin-bottom: 0;
  }

  @media screen and (max-width: 620px){
    flex-direction: column;
  }
`
const Date = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 0.8rem;
  width: 25%;
  font-family: 'Times New Roman', Times, serif;

  @media screen and (max-width: 620px){
    width: 100%;
  }
`
const ColorButton = withStyles(() => ({
  root: {
    color: "#fff",
    borderRadius: 20,
    width: "180px",
    height: "35px",
    fontFamily: "sans-serif",
    backgroundColor: "#38d39f",
    '&:hover': {
      backgroundColor: "#3FECB2",
    },
  },
}))(Button);
// // // // // // // // // // // Styled Components End // // // // // // // // // // //

// const TasksProgress = () => (
//     <CardContent>
//         <Grid
//           container
//           sx={{ justifyContent: 'space-between' }}
//         >
//           <Grid item>
//             <Typography
//               color="textSecondary"
//               gutterBottom
//               variant="h6"
//             >
//               Profile Completed
//             </Typography>
//             <Typography
//               color="textPrimary"
//               variant="h3"
//             >
//               20%
//             </Typography>
//           </Grid>
//         </Grid>
//         <Box sx={{ pt: 3 }}>
//           <LinearProgress
//             value={20}
//             variant="determinate"
//           />
//         </Box>
//         <Typography
//               color="textPrimary"
//               variant="subtitle1"
//             >
//               <LinkTo to="/user/profile">Click Here </LinkTo>to complete your profile details
//             </Typography>
//     </CardContent>
//   );
// // // // // // // // // // // // Updating Service Provider Details // // // // // // // // // // // //
      // updating the status of user request
      function onSubmitCompleted(){
        fetch('http://localhost:3000/user_requests_completed',{
          method: 'put',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
          body: JSON.stringify({
            userName: localStorage.getItem('User'),
            completed: true
          })
        }).then(res => res.json({
            Message: 'Successfully Updated Status of Service Provider for User.'
        }))   
      }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // Deleting the user Request // // // // // // // // // // // //
      // deleting the user request
      function onSubmitCancelrequest(value){
        fetch('http://localhost:3000/user_requests',{
          method: 'delete',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
          body: JSON.stringify({
            userName: localStorage.getItem('User'),
            date: value
          })
        }).then(res => res.json({
            Message: 'Successfully Deleted the request.'
        }))   
      }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
function refreshPage() {
  window.location.reload(false);
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "transparent",
      width: 700,
    },
  }));
  

const Dashboard = () => {
    // Completed Button Function
    function setCompleted(){
      onSubmitCompleted();
      refreshPage();
    }
    // Cancel Request Button function
    function setCancelRequest(value){
      onSubmitCancelrequest(value)
      refreshPage();
    }

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    // Getting All the Request Data
    const [requestData, setRequestData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/user_requests')
            .then(res=>{
                console.log(res)
                setRequestData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

        return (
            <DashboardContainer>
                <CustDBLayout/>
                <TabContainer>
                  <div className={classes.root}>
                      <AppBar position="relative" color="default">
                          <Tabs
                          value={value}
                          onChange={handleChange}
                          indicatorColor="primary"
                          textColor="primary"
                          variant="fullWidth"
                          aria-label="full width tabs example"
                          >
                          <Tab label="Your Requests" {...a11yProps(0)} />
                          <Tab label="Your History" {...a11yProps(1)} />
                          </Tabs>
                      </AppBar>
                      <SwipeableViews
                          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                          index={value}
                          onChangeIndex={handleChangeIndex}
                      >
                          <TabPanel value={value} index={0} dir={theme.direction}>
                            <RequestContainer>
                            {
                              requestData.map((value,i) => {
                                if(localStorage.getItem('User')===value.userName && value.completed===false && value.serviceProviderName !==''){
                                  return <RequestCard>
                                          <RequestCardContent>
                                            <SP>
                                              <SPCategoryContainer>
                                                <SPCategory>Category:-&nbsp;{value.category}</SPCategory>
                                                <Date>Date:-{dateFormat(`${value.date}`, "mmmm dS, yyyy")}</Date>
                                              </SPCategoryContainer>
                                              <SPName>Service Provide Name:-&nbsp;{value.serviceProviderName}</SPName>
                                              <SPContactNumber>Service Provider Contact Number:-&nbsp;{value.serviceProviderContactNumber}</SPContactNumber>
                                              <SPAddress>Service Provider Address:-&nbsp;{value.serviceProviderAddress},{value.serviceProviderDistrict},{value.serviceProviderState}-{value.serviceProviderPin}</SPAddress>
                                            </SP>
                                            <ButtonContainer>
                                              <ColorButton
                                                onClick={() => setCancelRequest(value.date)} 
                                                className='button'>
                                                Cancel Request                                            
                                              </ColorButton>
                                              <ColorButton 
                                              onClick={() => setCompleted()}
                                              className='button'>
                                                Completed
                                              </ColorButton>
                                            </ButtonContainer>
                                          </RequestCardContent>
                                        </RequestCard>
                                }else{
                                  return console.log()
                                }
                              })
                            }
                            </RequestContainer>
                          </TabPanel>
                          <TabPanel value={value} index={1} dir={theme.direction}>
                          <RequestContainer>
                            {
                              requestData.map((value,i) => {
                                if(localStorage.getItem('User')===value.userName && value.completed===true){
                                  return <RequestCard>
                                          <RequestCardContent>
                                            <SP>
                                              <SPCategoryContainer>
                                                <SPCategory>Category:-&nbsp;{value.category}</SPCategory>
                                                <Date>Date:-{dateFormat(`${value.date}`, "mmmm dS, yyyy")}</Date>
                                              </SPCategoryContainer>
                                              <SPName>Service Provide Name:-&nbsp;{value.serviceProviderName}</SPName>
                                              <SPContactNumber>Service Provider Contact Number:-&nbsp;{value.serviceProviderContactNumber}</SPContactNumber>
                                              <SPAddress>Service Provider Address:-&nbsp;{value.serviceProviderAddress},{value.serviceProviderDistrict},{value.serviceProviderState}-{value.serviceProviderPin}</SPAddress>
                                            </SP>
                                          </RequestCardContent>
                                        </RequestCard>
                                }else{
                                  return console.log()
                                }
                              })
                            }
                            </RequestContainer>
                          </TabPanel>
                      </SwipeableViews>
                    </div>
                </TabContainer>
                {/*<CardContainer>
                    <CardHeader>
                    </CardHeader>
                    <PprofileInfoContainer>
                      <ProfileCompletion>
                        <TasksProgress/>
                      </ProfileCompletion>
                    </PprofileInfoContainer>
                </CardContainer> */}  
            </DashboardContainer>
        )
}

export default Dashboard