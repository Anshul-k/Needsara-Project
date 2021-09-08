import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core'
import Category from '../../CategoryList/categroyList' 
import { v4 as uuidv4 } from 'uuid';

// // // // // // // // // // // // // // Styled Components Start // // // // // // // // // // // //
const OverallContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  width: auto;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 10px 20px 5px rgba(0, 0, 0, 0.3);
  background: rgba(0,0,0,0.05);
  width: 50%;
  height: 100%;
  border-radius: 2rem;

  @media screen and (max-width: 820px){
    width: 60%;
  }
  @media screen and (max-width: 760px){
    width: 70%;
  }
  @media screen and (max-width: 700px){
    width: 80%;
  }
  @media screen and (max-width: 700px){
    width: 85%;
  }
`
const Header = styled.div`
  padding: 1rem;
`
const Heading = styled.h2`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const Form = styled.form`
  width: 100%;
  height: 100%;
`
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
`
const TextfieldContainer = styled.div`
  width: 100%;

  .TextField{
      width: 100% !important;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`
// // // // // // // // // // // // // // Styled Components End // // // // // // // // // // // //
const range = [
  {
    value: 'Select',
    label: '--Select--'
  },
  {
    value: '<2km',
    label: '0Km - 2Km'
  },
  {
    value: '<8km',
    label: '2Km - 8Km'
  },
  {
    value: '<20km',
    label: '8Km - 20Km'
  }
]

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.95)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(33, 47, 60, 0.5)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(33, 47, 60, 0.5)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.95)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(56, 211, 159, 0.5)',
      },
    },
  },
})(TextField);

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
      width: "100px",
      fontFamily: "sans-serif",
      backgroundColor: "#38d39f",
      '&:hover': {
        backgroundColor: "#3FECB2",
      },
    },
  }))(Button);

function ServiceSearchForm() {
// // // // // // // // // // // // Request data gather Start// // // // // // // // // // // //
        //Changing the Route of page
        const signInRouteChange = useHistory();
        function handleClick() {
        signInRouteChange.push("/services");
        }
      // Data to be send 
      const [requestData, setRequestData] = useState({
        RequestUserName: '',
        RequestCategory: '',
        RequestAddress: '',
        RequestDistrict: '',
        RequestPinCode: '',
        RequestRange: '',
        RequestDescription: '',
        RequestPhoneNumber: '',
        RequestUniqueId: uuidv4()
      }) 

      // Request Handle
      function onRequestHandle(e){
          const newRequestdata ={...requestData}
          newRequestdata[e.target.id] = e.target.value
          setRequestData(newRequestdata)
      }
      // Submitting the Register form
      function onSubmitRequest(event){
        if(requestData.RequestPinCode && requestData.RequestCategory && requestData.RequestAddress && requestData.RequestDistrict && requestData.RequestRange && requestData.RequestDescription && requestData.RequestPhoneNumber){
        event.preventDefault()
        fetch('/user_requests',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            uniqueId: requestData.RequestUniqueId,
            userName: localStorage.getItem('User'),
            category: requestData.RequestCategory,
            address: requestData.RequestAddress,
            district: requestData.RequestDistrict,
            pin: requestData.RequestPinCode,
            range: requestData.RequestRange,
            phoneNumber: requestData.RequestPhoneNumber,
            descriptionOfWork: requestData.RequestDescription
          })
        }).then(res => res.json())
          .then(user =>{
            if(user){ 
              localStorage.setItem('Category',requestData.RequestCategory);
              localStorage.setItem('Pin',requestData.RequestPinCode);
              localStorage.setItem('Range',requestData.RequestRange);
              localStorage.setItem('UniqueId',requestData.RequestUniqueId);
              localStorage.setItem('address',requestData.RequestAddress);
              localStorage.setItem('district',requestData.RequestDistrict);
              localStorage.setItem('userPhoneNumber',requestData.RequestPhoneNumber);
              localStorage.setItem('descriptionOfWork',requestData.RequestDescription);
              handleClick() 
            }else{
              window.alert("Something went wrong Try Again.")
            }
          })    
      }else{
        window.alert("Field should not be empty.")
      }
    }
// // // // // // // // // // // // Request data gather End// // // // // // // // // // // //

    const classes = useStyles();

    return (
        <OverallContainer>
            <Container>
                <Header>
                    <Heading>
                        Fill the Neccsessary Details
                    </Heading>
                </Header>
                <Form>
                    <FormContainer>
                          <TextfieldContainer>
                          <CssTextField 
                          onChange={(e)=>onRequestHandle(e)} 
                          id="RequestCategory" 
                          label="Category"
                          margin="normal"
                          variant="outlined"
                          color="secondary"
                          className={`${classes.root} ${'TextField'}`}
                          fullWidth
                          name="state"
                          select
                          required
                          SelectProps={{ native: true }}
                          >
                              {Category.map((option) => (
                              <option
                                  key={option.value}
                                  value={option.label}
                              >
                                  {option.label}
                              </option>
                              ))}
                          </CssTextField>
                        </TextfieldContainer>
                        <TextfieldContainer>
                          <CssTextField
                              onChange={(e)=>onRequestHandle(e)} 
                              id="RequestAddress" 
                              label="Address"
                              required 
                              margin="normal"
                              variant="outlined"
                              color="secondary"
                              fullWidth
                              className={`${classes.root} ${'TextField'}`}
                          />
                        </TextfieldContainer>
                        <TextfieldContainer>
                          <CssTextField
                              onChange={(e)=>onRequestHandle(e)} 
                              id="RequestDistrict" 
                              label="District"
                              required 
                              margin="normal"
                              variant="outlined"
                              color="secondary"
                              fullWidth
                              className={`${classes.root} ${'TextField'}`}
                          />
                        </TextfieldContainer>
                        <TextfieldContainer>
                          <CssTextField
                              onChange={(e)=>onRequestHandle(e)} 
                              id="RequestPhoneNumber" 
                              label="Phone Number"
                              required 
                              margin="normal"
                              variant="outlined"
                              color="secondary"
                              fullWidth
                              className={`${classes.root} ${'TextField'}`}
                          />
                        </TextfieldContainer>
                        <TextfieldContainer>
                          <CssTextField
                              onChange={(e)=>onRequestHandle(e)} 
                              id="RequestPinCode" 
                              label="Pin Code"
                              required 
                              margin="normal"
                              variant="outlined"
                              color="secondary"
                              fullWidth
                              className={`${classes.root} ${'TextField'}`}
                          />
                        </TextfieldContainer>
                        <TextfieldContainer>
                          <CssTextField 
                          onChange={(e)=>onRequestHandle(e)} 
                          id="RequestRange" 
                          label="Select Range"
                          margin="normal"
                          variant="outlined"
                          color="secondary"
                          className={`${classes.root} ${'TextField'}`}
                          fullWidth
                          select
                          required
                          SelectProps={{ native: true }}
                          >
                              {range.map((option) => (
                              <option
                                  key={option.value}
                                  value={option.value}
                              >
                                  {option.label}
                              </option>
                              ))}
                          </CssTextField>
                        </TextfieldContainer>
                        <TextfieldContainer>
                          <CssTextField 
                          onChange={(e)=>onRequestHandle(e)} 
                          id="RequestDescription" 
                          label="Desciption of work"
                          margin="normal"
                          variant="outlined"
                          color="secondary"
                          className={`${classes.root} ${'TextField'}`}
                          fullWidth
                          multiline
                          rows={5}
                          required
                          />
                        </TextfieldContainer>
                        <ButtonContainer>
                            <ColorButton
                                onClick={onSubmitRequest}
                                variant="contained" 
                                color="primary" 
                                className={classes.margin}>
                                    Search
                            </ColorButton>
                        </ButtonContainer>
                    </FormContainer>
                </Form>
            </Container>
        </OverallContainer>
    )
}

export default ServiceSearchForm
