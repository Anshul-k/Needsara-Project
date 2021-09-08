import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ServiceProviderDBLayout from '../../components/Dashboard/ServiceProviderDB/ServiceProviderDBLayout'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

// // // // // // // // // // // Styled Components Start // // // // // // // // // // //
const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`
const TabContainer = styled.div`
  display: flex;
  margin: 3rem;
  margin-top: 5rem;
  width: 100%;
`
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
  width: 100%;
`
const Customer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const CustomerCategoryContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0.3rem;

  @media screen and (max-width: 620px){
    flex-direction: column-reverse;
  }
`
const CustomerContactNumber = styled.div`
  font-size: 1.15rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgba(0,0,0,0.8);
  width: 75%;
`
const CustomerAddress = styled.div`
  font-size: 0.9rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgba(0,0,0,0.8);
`
const CustomerDescription = styled.div`
    font-size: 0.9rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: rgba(0,0,0,0.8);
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

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
// // // // // // // // // // // // Updating Service Provider Details // // // // // // // // // // // //
      // updating the status of user request
      function onSubmitAccepted(){
        fetch('/user_requests_accepted',{
          method: 'put',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
          body: JSON.stringify({
            serviceProviderUserName: localStorage.getItem('Admin'),
            accepted: true
          })
        }).then(res => res.json({
            Message: 'Successfully Updated Status of Service Provider request.'
        }))   
      }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // Sending SMS to User // // // // // // // // // // // //
      // Sending a Request declined message to the user
      function onSubmitTextMessageRejected(value){
        fetch('/send-text-user',{
          method: 'post',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
          body: JSON.stringify({
            serviceProviderName: value.serviceProviderName,
            phoneNumber: value.phoneNumber,
          })
        }).then(res => res.json({
            Message: 'Successfully Send message to the User'
        }))  
      }
      // Sending a Request Accepted message to the user
      function onSubmitTextMessageAccepted(value){
        fetch('/send-text-userAccepted',{
          method: 'post',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
          body: JSON.stringify({
            serviceProviderName: value.serviceProviderName,
            phoneNumber: value.phoneNumber,
          })
        }).then(res => res.json({
            Message: 'Successfully Send message to the User'
        }))  
      }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // Deleting the Request // // // // // // // // // // // //
      // deleting the user request
      function onDecline(value){
        fetch('/user_requests',{
          method: 'delete',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
          body: JSON.stringify({
            userName: localStorage.getItem('Admin'),
            date: value.date
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
      width: '100%',
    },
  }));


const SPDashboard = () => {
  // Completed Button Function
  function setAccepted(value){
    onSubmitAccepted();
    onSubmitTextMessageAccepted(value)
    refreshPage();
  }
  function setDecline(value){
    onSubmitTextMessageRejected(value)
    onDecline(value)
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
        axios.get('/user_requests')
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
            <ServiceProviderDBLayout/>
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
                                if(localStorage.getItem('Admin')===value.serviceProviderUserName && value.accepted===false){
                                return <RequestCard>
                                    <RequestCardContent>
                                    <Customer>
                                        <CustomerCategoryContainer>
                                            <CustomerContactNumber>Customer Contact Number:- {value.phoneNumber}&nbsp;</CustomerContactNumber>
                                            <Date>Date:- {dateFormat(`${value.date}`, "mmmm dS, yyyy")}</Date>
                                        </CustomerCategoryContainer>
                                        <CustomerAddress>Customer Address:- {value.address}, {value.district}, {value.pin}&nbsp;</CustomerAddress>
                                        <CustomerDescription>Description of Work:- {value.descriptionOfWork}</CustomerDescription>
                                    </Customer>
                                    <ButtonContainer>
                                        <ColorButton
                                        onClick={() => setAccepted(value)}
                                        className='button'>
                                        Accept                                            
                                        </ColorButton>
                                        <ColorButton 
                                        onClick={() => setDecline(value)}
                                        className='button'>
                                        Decline
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
                              if(localStorage.getItem('Admin')===value.serviceProviderUserName && value.accepted===true){
                              return <RequestCard>
                                  <RequestCardContent>
                                  <Customer>
                                      <CustomerCategoryContainer>
                                          <CustomerContactNumber>Customer Contact Number:- {value.phoneNumber}&nbsp;</CustomerContactNumber>
                                          <Date>Date:- {dateFormat(`${value.date}`, "mmmm dS, yyyy")}</Date>
                                      </CustomerCategoryContainer>
                                      <CustomerAddress>Customer Address:- {value.address}, {value.district}, {value.pin}&nbsp;</CustomerAddress>
                                      <CustomerDescription>Description of Work:- {value.descriptionOfWork}</CustomerDescription>
                                  </Customer>
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
        </DashboardContainer>
    )
}

export default SPDashboard
