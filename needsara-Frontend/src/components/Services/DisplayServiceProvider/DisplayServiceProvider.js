import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Rating } from '@material-ui/lab';
import axios from 'axios'

// // // // // // // // // // // // // // Styled Components Start // // // // // // // // // // // // // 
const OverallContainer = styled.div`
    width: auto;
    height: 100vh;
`
const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    flex-direction: column;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.3);
    background: rgba(0,0,0,0.02);
    border-radius: 2rem;
    width: 80%;
    padding: 1rem;
    margin-bottom: 1.2rem;

    @media screen and (max-width:860px) {
        flex-direction: column;
    }
`
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
    width: 75%;

    @media screen and (max-width:860px) {
        margin-bottom: 2.5rem;
    }

`
const ImageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
`
const Name = styled.div`
    font-weight: 500;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2.5rem;
    margin-bottom: 0.1rem;
    color: rgba(26, 211, 159, 1);
`
const Address = styled.div`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.2rem;
    display: flex;
    margin-bottom: 0.1rem;
    color: rgba(0, 0, 0, 0.6);
`
const Category = styled.div`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.1rem;
    margin-bottom: 0.1em;
    color: rgba(0, 0, 0, 0.6);
`
const Ratings = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.05rem;
    margin-bottom: 0.1em;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
`
const Timings = styled.div`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1rem;
    margin-bottom: 0.3em;  
    color: rgba(0, 0, 0, 0.65);
`
const Description = styled.div`
    font-size: 1rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-bottom: 0.3em;
    color: rgba(0, 0, 0, 0.6);
`
const VisitingCharge = styled.div`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.7);
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 0.1rem 1rem;
`
// // // // // // // // // // // // // // Styled Components End // // // // // // // // // // // // //
// // // // // // // // // // // // Updating Service Provider details // // // // // // // // // // // //
      // Submitting the Register form
      function onSubmitSelect(value){
        fetch('http://localhost:3000/user_requests',{
          method: 'put',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
          body: JSON.stringify({
            uniqueId: localStorage.getItem('UniqueId'),
            serviceProviderUserName: value.userName,
            serviceProviderName: value.name,
            serviceProviderContactNumber: value.contactNumber,
            serviceProviderAddress: value.address,
            serviceProviderDistrict: value.district,
            serviceProviderState: value.state,
            serviceProviderPin: value.pin
          })
        }).then(res => res.json({
            Message: 'Successfully Updated Service Provider for User.'
        }))
        .then(user =>{
            if(user){ 
              localStorage.setItem('spPhoneNumber',value.contactNumber);
            }else{
              window.alert("Something went wrong Try Again.")
            }
          })       
      }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // Sending SMS to Service provider // // // // // // // // // // // //
      // Submitting the Register form
      function onSubmitTextMessage(value){
        fetch('http://localhost:3000/send-text',{
          method: 'post',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
          body: JSON.stringify({
            description: localStorage.getItem('descriptionOfWork'),
            recipient: value.contactNumber,
            address: localStorage.getItem('address'),
            userPhoneNumber: localStorage.getItem('userPhoneNumber'),
            district: localStorage.getItem('district'),
            Pin: localStorage.getItem('Pin'),
            spName: value.name
          })
        }).then(res => res.json({
            Message: 'Successfully Send message to the Service Provider.'
        }))  
      }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  }));

  const ColorButton = withStyles(() => ({
    root: {
      color: "#fff",
      borderRadius: 20,
      width: "150px",
      fontFamily: "sans-serif",
      backgroundColor: "#38d39f",
      '&:hover': {
        backgroundColor: "#3FECB2",
      },
    },
  }))(Button);

  let count=0;

const DisplayServiceProvider = () => {
    //Changing the Route of page
    const signInRouteChange = useHistory();
    function handleClick() {
    signInRouteChange.push("/services/select");
    }

    function setSP(value){
        onSubmitSelect(value);
        onSubmitTextMessage(value);
        handleClick();
      }
    const classes = useStyles();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/user_requests_api')
            .then(res=>{
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <OverallContainer>
            <Container>
            {   
                (localStorage.getItem('Range')==='<2km' || localStorage.getItem('Range')==='Select')
                ?
                posts.map((post,i) => {
                if(localStorage.getItem('Category')===post.category & localStorage.getItem('Pin')===post.pin){
                    count=1;
                    return<CardContainer key={i}>
                            <ImageContent>
                                <Avatar className={`${classes.large}`} alt={post.name} src={post.pic} />
                            </ImageContent>
                            <CardContent>
                                <Name>{post.name}</Name>
                                <Address>{post.address},{post.district},{post.state},{post.pin}&ensp;<Category>&ensp;Category-{post.category}</Category></Address>
                                <Ratings>3 stars<Rating name="read-only" value={3} readOnly /></Ratings>
                                <Timings>Opens at:-{post.timingsopen} &ensp;|&ensp;Closes at:- {post.timingsclose}</Timings>
                                <Description>{post.jobdescription}</Description>
                                <VisitingCharge>Visiting Charges- ₹{post.visitingCharges}</VisitingCharge>
                            </CardContent>
                            <ButtonContainer>
                                    <ColorButton
                                        onClick={() => setSP(post)}
                                        variant="contained" 
                                        color="primary" 
                                        className={classes.margin}>
                                            Select
                                    </ColorButton>
                                </ButtonContainer>
                        </CardContainer>
                    }else{
                        return console.log()
                    }        
            })
                :
                (localStorage.getItem('Range')==='<8km')
                ?
                posts.map((post,i) => {
                    if(localStorage.getItem('Category')===post.category & post.pin-1<=localStorage.getItem('Pin')<=post.pin+1){
                        count=1;
                        return<CardContainer key={i}>
                                <ImageContent>
                                    <Avatar className={`${classes.large}`} alt={post.name} src={post.pic} />
                                </ImageContent>
                                <CardContent>
                                    <Name>{post.name}</Name>
                                    <Address>{post.address},{post.district},{post.state},{post.pin}&ensp;<Category>&ensp;Category-{post.category}</Category></Address>
                                    <Ratings>3 stars<Rating name="read-only" value={3} readOnly /></Ratings>
                                    <Timings>Opens at:-{post.timingsopen} &ensp;|&ensp;Closes at:- {post.timingsclose}</Timings>
                                    <Description>{post.jobdescription}</Description>
                                    <VisitingCharge>Visiting Charges- ₹{post.visitingCharges}</VisitingCharge>
                                </CardContent>
                                <ButtonContainer>
                                        <ColorButton
                                            onClick={() => setSP(post)}
                                            variant="contained" 
                                            color="primary" 
                                            className={classes.margin}>
                                                Select
                                        </ColorButton>
                                    </ButtonContainer>
                            </CardContainer>
                        }else{
                            return console.log()
                        }        
                }) 
                :
                (localStorage.getItem('Range')==='<20km')
                ?
                posts.map((post,i) => {
                    if(localStorage.getItem('Category')===post.category & post.pin-2<=localStorage.getItem('Pin')<=post.pin+2){
                        count=1;
                        return<CardContainer key={i}>
                                <ImageContent>
                                    <Avatar className={`${classes.large}`} alt={post.name} src={post.pic} />
                                </ImageContent>
                                <CardContent>
                                    <Name>{post.name}</Name>
                                    <Address>{post.address},{post.district},{post.state},{post.pin}&ensp;<Category>&ensp;Category-{post.category}</Category></Address>
                                    <Ratings>3 stars<Rating name="read-only" value={3} readOnly /></Ratings>
                                    <Timings>Opens at:-{post.timingsopen} &ensp;|&ensp;Closes at:- {post.timingsclose}</Timings>
                                    <Description>{post.jobdescription}</Description>
                                    <VisitingCharge>Visiting Charges- ₹{post.visitingCharges}</VisitingCharge>
                                </CardContent>
                                <ButtonContainer>
                                        <ColorButton
                                            onClick={() => setSP(post)}   
                                            variant="contained" 
                                            color="primary" 
                                            className={classes.margin}>
                                                Select
                                        </ColorButton>
                                    </ButtonContainer>
                            </CardContainer>
                        }else{
                            return console.log()
                        }        
                }) 
                :
                <div>
                    <h1>data not found</h1>
                </div>
            }  
            {
                (count===0)
                ?
                <div>
                    <h1>data not found</h1>
                </div>
                :
                console.log(count)
            }
            </Container>
        </OverallContainer>
    )
}

export default DisplayServiceProvider
