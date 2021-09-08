import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { TextField } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Login from '../../../Images/Sign_in_up/ServiceProvider/LogInSP.svg';
import Button from '@material-ui/core/Button';

// // // // // // // // // // // // Styled Components Start // // // // // // // // // // // // //

const LogIn = styled.div`
  display: flex;
  padding: 5rem;
  @media screen and (max-width: 1080px){
    justify-content: center;
  }
`
const LogInContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 10rem;

  @media screen and (max-width: 1080px){
    margin: 0;
  }
`
const LogInImageContainer = styled.div`
  display: flex;
  width: 28rem;
  height: 28rem;

  @media screen and (max-width: 1280px){
    margin-left: -2rem;
  }
  @media screen and (max-width: 1200px){
    margin-left: -4rem;
  }
  @media screen and (max-width: 1080px){
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
const LogInImage = styled.img`
  margin-left: 5rem;
`
const LogInForm = styled.div`
  width: 500px;
  height: 100%;

  @media screen and (max-width:580px){
    width: 450px;
  }
`
const LogInRegisterForm = styled.form`
  margin-right: 5rem;
  width: 100%;
  height: 60vh;
  background-color: var(--first-color-lighten);
  padding: 2rem 1rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0px 8px 20px rgba(35, 0, 77, 0.2);
`
const LogInTitle = styled.h2`
  color: rgba(0,0,0,0.75);
  align-items: center;
`
const LogInBox = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 0.5rem;
  padding: 1rem;
  background-color: #fff;
  margin-top: 0.5rem;
  border-radius: 0.5rem;

  .icon{
    margin-top: 1rem;
    font-size: 1.5rem;
    color: rgba(56, 211, 159, 0.6);
  }
  .textfield{
    font-weight: 700;
  }
`
const RedirectContent = styled.div`
  display: block;
  width: max-content;
  margin-left: auto;
  margin-top: 0.1rem;
  margin-bottom: 2rem;
  font-size: 0.8rem;
  font-weight: 600;


  .Link{
    text-decoration: none;
    color: inherit;

    :hover{
      cursor: pointer;
      color: rgba(100, 211, 159, 0.8) ;
    }
  }
`
const H4 = styled.h4`
  color: rgba(0,0,0,0.7)
`
// // // // // // // // // // // // Styled Components End // // // // // // // // // // // // // //

const useStyles = makeStyles((theme) => ({
    root:{
        '& label.Mui-focused': {
      color: '#38d39f',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#38d39f',
    }
    },
    margin: {
      margin: theme.spacing(1),
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
      width: "40%",
      fontFamily: "sans-serif",
      backgroundColor: "#38d39f",
      '&:hover': {
        backgroundColor: "#3FECB2",
      },
    },
}))(Button);

function SPSigninLogin(){

  // // // // // // // // // // // // SIGIN Connect Start// // // // // // // // // // // //
    //Changing the Route of Signin 
    const signInRouteChange = useHistory();
    function handleClick() {
      signInRouteChange.push("/admin");
    }
    // Signin Data to be send 
    const [signInData, setSignInData] = useState({
      SignInUserName: '',
      SignInPassword: ''
    }) 
    // SignIn Handle
    function onSignInHandle(e){
        const newdata ={...signInData}
        newdata[e.target.id] = e.target.value
        setSignInData(newdata)
    }

    useEffect(()=>{
      const userInfo = localStorage.getItem("Admin");
      if(userInfo){
        signInRouteChange.push("/admin");
      }
    });

    // Submitting the Signin form
    function onSubmitSignIn(event){
      event.preventDefault()
      fetch('/signin_admin',{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          userName: signInData.SignInUserName,
          password: signInData.SignInPassword
        })
      }).then(res => res.json())
        .then(data =>{
          if(data === 'success'){ 
            localStorage.clear();
            localStorage.setItem('Admin',signInData.SignInUserName);
            handleClick()
          }else{
            window.alert("Invalid Username or Password")
          }
        })
    }
// // // // // // // // // // // // SIGIN Connect End// // // // // // // // // // // //

const classes = useStyles();

return (
  <React.Fragment>
    <LogIn>
        <LogInContent>
            <LogInImageContainer>
                <LogInImage src={Login} alt=""/>
            </LogInImageContainer>
            <LogInForm>
                <LogInRegisterForm action="index.html" id="login-in">
                    <LogInTitle>Service Provider Sign In</LogInTitle>
                    <LogInBox>
                        <FaUserAlt className="icon"/>
                        <TextField  
                            onChange={(e)=>onSignInHandle(e)}
                            id="SignInUserName"
                            label="Username" 
                            required
                            className={`${classes.root} ${"textField"}`}
                        />
                    </LogInBox>
                    <LogInBox>
                        <FaLock className="icon"/>
                        <TextField   
                            onChange={(e)=>onSignInHandle(e)}
                            id="SignInPassword"
                            label="Password" 
                            type="password"
                            required
                            className={`${classes.root} ${"textField"}`}
                        />
                    </LogInBox> 
                    <RedirectContent> 
                        <H4>New here ? To List your Business <Link to="/signup_admin" className="Link">Click Here</Link></H4>
                    </RedirectContent>
                    <ColorButton 
                    onClick={onSubmitSignIn}
                    variant="contained" 
                    color="primary" 
                    className={classes.margin}>
                        Sign In
                    </ColorButton>
                </LogInRegisterForm> 
            </LogInForm>
        </LogInContent>
    </LogIn>
  </React.Fragment>  
)
}

export default SPSigninLogin
