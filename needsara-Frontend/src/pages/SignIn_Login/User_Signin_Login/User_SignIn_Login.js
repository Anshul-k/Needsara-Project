import React, { useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { FaUserAlt, FaLock , FaPhoneAlt} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Customer from '../../../Images/Sign_in_up/Customer/Customer.svg';
import Login from '../../../Images/Sign_in_up/Customer/Login.svg';
import './User_SignIn_Login.css'

function UserSignInLogin (history) {
// // // // // // // // // // // // SIGIN Connect Start// // // // // // // // // // // //
    //Changing the Route of Signin 
    const signInRouteChange = useHistory();
    function handleClick() {
      signInRouteChange.push("/user");
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
      const userInfo = localStorage.getItem("User");
      if(userInfo){
        signInRouteChange.push("/user");
      }
    });

    // Submitting the Signin form
    function onSubmitSignIn(event){
      event.preventDefault()
      fetch('http://localhost:3000/signin_user',{
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
            localStorage.setItem('User',signInData.SignInUserName);
            handleClick()
          }else{
            window.alert("Invalid Username or Password")
          }
        })
    }
// // // // // // // // // // // // SIGIN Connect End// // // // // // // // // // // //

// // // // // // // // // // // // REGISTER Connect Start// // // // // // // // // // // //
      // Register Data to be send 
      const [registerData, setRegisterData] = useState({
        RegisterUserName: '',
        RegisterEmail: '',
        RegisterPhoneNumber: '',
        RegisterPassword: '',
        RegisterConfirmPassword: ''
      }) 

      // Register Handle
      function onRegisterHandle(e){
          const newRegisterdata ={...registerData}
          newRegisterdata[e.target.id] = e.target.value
          setRegisterData(newRegisterdata)
      }
      // Submitting the Register form
      function onSubmitRegister(event){
        if(registerData.RegisterPassword===registerData.RegisterConfirmPassword){
          event.preventDefault()
        fetch('http://localhost:3000/register_user',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            userName: registerData.RegisterUserName,
            email: registerData.RegisterEmail,
            phoneNumber: registerData.RegisterPhoneNumber,
            password: registerData.RegisterPassword,
            ConfirmPassword: registerData.RegisterConfirmPassword
          })
        }).then(res => res.json())
          .then(user =>{
            if(user){ 
              localStorage.setItem('User',registerData.RegisterUserName);
              handleClick() 
            }else{
              window.alert("Something went wrong Try Again.")
            }
          })    
        }else{
          window.alert("password Doesnt match.")
        }
      }
// // // // // // // // // // // // REGISTER Connect End// // // // // // // // // // // //

    const[ signupSwitch, setSignupSwitch] = useState(false);
    
    return (
      <div className={`${signupSwitch ? "container sign-up-mode" : " container"}`}>
      <div className="forms-container">
        <div className="signin-signup">


          <form className="sign-in-form" method="post">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FaUserAlt className="icon"/>
              <input 
              onChange={(e)=>onSignInHandle(e)} 
              id="SignInUserName" 
              value={signInData.SignInUserName} 
              type="text" 
              placeholder="Username" 
              />
            </div>
            <div className="input-field">
              <FaLock className="icon"/>
              <input 
              onChange={(e)=>onSignInHandle(e)} 
              id="SignInPassword" 
              value={signInData.SignInPassword} 
              type="password"
              placeholder="Password" 
              />
            </div>
            <input  
            onClick={onSubmitSignIn}
            type="button" 
            value="Login" 
            className="btn solid" />
          </form>



          <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FaUserAlt className="icon"/>
              <input
                onChange={(e)=>onRegisterHandle(e)} 
                id="RegisterUserName" 
                value={registerData.RegisterUserName} 
                type="text" 
                placeholder="Username" 
              />
            </div>
            <div className="input-field">
              <MdEmail className="icon"/>
              <input 
                onChange={(e)=>onRegisterHandle(e)} 
                id="RegisterEmail" 
                value={registerData.RegisterEmail} 
                type="email" 
                placeholder="Email" 
              />
            </div>
            <div className="input-field">
              <FaPhoneAlt className="icon"/>
              <input 
                onChange={(e)=>onRegisterHandle(e)} 
                id="RegisterPhoneNumber" 
                value={registerData.RegisterPhoneNumber} 
                type="tel" 
                placeholder="Phone Number"
              />
            </div>
            <div className="input-field">
              <FaLock className="icon"/>
              <input 
                onChange={(e)=>onRegisterHandle(e)} 
                id="RegisterPassword" 
                value={registerData.RegisterPassword} 
                type="password" 
                placeholder="Password"
               />
            </div>
            <div className="input-field">
              <FaLock className="icon"/>
              <input 
                onChange={(e)=>onRegisterHandle(e)} 
                id="RegisterConfirmPassword" 
                value={registerData.RegisterConfirmPassword} 
                type="password" 
                placeholder="Confirm Password"
               />
            </div>
            <input 
            onClick={onSubmitRegister}
            type="button" 
            className="btn" 
            value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Click below to create a new account !!
            </p>
            <button onClick={() => setSignupSwitch(true)} className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={Login} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Click below to Sign In !!
            </p>
            <button onClick={() => setSignupSwitch(false)} className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={Customer} className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default UserSignInLogin
