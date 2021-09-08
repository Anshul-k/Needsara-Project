import React, { useState } from 'react'
import ServiceProviderDBLayout from '../../components/Dashboard/ServiceProviderDB/ServiceProviderDBLayout'
import styled from 'styled-components'
import { Avatar, TextField } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import states from '../../components/Dashboard/CustomerDB/States' 
import category from '../../components/CategoryList/categroyList';

// // // // // // // // // // Styled Components Start // // // // // // // // // // 
const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const OtherElements = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem;
    margin-top: 4rem;
    width:100%;

    @media screen and (max-width: 1180px){
        margin-top: 6rem;
        margin-right: 2rem;
        margin-left: 2rem;
        flex-direction: column;
    }
    @media screen and (max-width: 786px){
        flex-direction: column;
        margin-top: 11rem;
    }
`
const ProfileDetailsContainer = styled.div`
    color: rgba(0, 0, 0, 0.87);
    border: 0;
    height: 100%;
    width: 35%;
    display: flex;
    position: relative;
    font-size: .875rem;
    min-width: 300;
    word-wrap: break-word;
    background: #FFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
    border-radius: 6px;
    margin: 30px;
    flex-direction: column;
    text-align: center;

    @media screen and (max-width: 1080px){
        width: 80%;
    }
`
const ProfilePicContainer = styled.div`
    margin: -50px auto 0;
    padding: 0;
    overflow: hidden;
    max-width: 130px;
    box-shadow: 0 16px 38px -12px rgba(0,0,0,0.56), 0 4px 25px 0px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20);
    max-height: 130px;
    border-radius: 50%;
`
const ProfileDetails = styled.div`
    margin-top: 15px;
    flex: 1 1 auto;
    padding: 0.9375rem 20px;
    position: relative;
    -webkit-box-flex: 1;

    h4{
        color: #01bf71;
    }
`
const ProfileRow = styled.div`
    display: flex;
    width: 100%
`
const CardContainer = styled.div`
    color: rgba(0, 0, 0, 0.87);
    margin: 1rem;
    width: 75%;
    border: 0;
    display: flex;
    position: relative;
    font-size: .875rem;
    min-width: 0;
    word-wrap: break-word;
    background: #FFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
    margin-top: 30px;
    border-radius: 6px;
    margin-bottom: 30px;
    flex-direction: column;
`
const CardHeader = styled.div`
    padding: 1rem;
    margin: -20px 25px 0 25px;
    border-radius: 10px;
    background: linear-gradient(60deg, #01bf71, #00A461);
    box-shadow: 0 4px 20px 0 rgba(0,0,0,0.14), 0 7px 10px -5px rgb(156,39,176,0.4);
    color: #fff;
    position: relative;
`
const Form = styled.form`   
    display: flex;
    padding: 0.9375rem 20px;
    position: relative;
    width: 100%;

    @media screen and (max-width: 1080px){
        justify-content: flex-start;
    }
`
const FormRow = styled.div`
    width: 100%;
    margin: 0 -15px !important;
    display: flex;

    @media screen and (max-width: 786px){
        flex-direction: column;
    }
`
const FormRowElement = styled.div`
    padding: 1rem;
    width: 100%;

    .textField{
            width: 100%;
        }
`
const ButtonContainer = styled.div`
    display: flex;
    width: 40%;
    align-items: center;
`

// // // // // // // // // // //  Styled Components End // // // // // // // // // //

const ColorButton = withStyles(() => ({
    root: {
        borderRadius: '20px',
        width: '100%',
        font: "Encode Sans Expanded",
        color: '#fff',
        backgroundColor: '#212F3D',
      '&:hover': {
        backgroundColor: '#01bf71',
        },
        fontSize: 13,
    },
  }))(Button);
  
  const useStyles = makeStyles((theme) => ({
    root:{
        '& label.Mui-focused': {
      color: '#01bf71',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#01bf71',
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
  
// // // // // // // // // // // // // // //

const SPProfile = () => {

    // // // // // // // // // // // // Updating Service Provider details // // // // // // // // // // // //
        // Update Data to be send 
        const [UpdateData, setUpdateData] = useState({
            updateName: '',
            updateTimingsOpen: '',
            updateTimingsClose: '',
            updatePhoneNumber: '',
            updateEmail: '',
            updateJobDescription: '',
            updateCategory: '',
            updateAddress: '',
            updateDistrict: '',
            updatePin: '',
            updateState: ''
        }) 
        // Update Handle
      function onUpdateHandle(e){
        const newUpdatedata ={...UpdateData}
        newUpdatedata[e.target.id] = e.target.value
        setUpdateData(newUpdatedata)
    }
      // function to update password 
      function onSubmitUpdate(event){
        fetch('/admin_data',{
        method: 'put',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            userName: localStorage.getItem('Admin'),
            Name: UpdateData.updateName,
            TimingsOpen: UpdateData.updateTimingsOpen,
            TimingsClose: UpdateData.updateTimingsClose,
            JobDescription: UpdateData.updateJobDescription,
            Category: UpdateData.updateCategory,
            address: UpdateData.updateAddress,
            District: UpdateData.updateDistrict,
            pin: UpdateData.updatePin,
            state: UpdateData.updateState,
            email: UpdateData.updateEmail,
            phoneNumber: UpdateData.updatePhoneNumber
        })
        }).then(res => res.json({
            Message: 'Successfully Updated data of Service Provider.'
        }))
        .then(user =>{
            if(user){ 
                window.alert("Your data have been updated.")
                window.location.reload(false);
            }else{
                window.alert("Something went wrong Try Again.")
            }
            })   
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

    const classes = useStyles();

    return (
        <Profile>
            <ServiceProviderDBLayout/>
            <OtherElements>
            <ProfileDetailsContainer>
                    <ProfilePicContainer>
                        <Avatar src="#" className={classes.large}/>
                    </ProfilePicContainer>
                    <ProfileDetails>
                        <h4>userName</h4>
                        <ProfileRow>
                            <form action="#" method="post" encType="multipart/form-data">
                                <div><input type="file" name="image" id="image"/></div>
                                <ColorButton variant="contained" color="primary" className={classes.margin} >
                                    Upload Picture
                                </ColorButton>
                            </form>
                        </ProfileRow>
                    </ProfileDetails>
                </ProfileDetailsContainer>
                <CardContainer>
                    <CardHeader>
                        <h4>Edit Profile</h4>
                    </CardHeader>
                    <Form noValidate autoComplete="off">
                        <FormRow>
                            <FormRowElement>
                                <TextField  
                                    onChange={(e)=>onUpdateHandle(e)}
                                    id="updateName" 
                                    label="Name" 
                                    className={`${classes.root} ${"textField"}`}
                                />
                            </FormRowElement>
                            <FormRowElement>
                                <TextField 
                                onChange={(e)=>onUpdateHandle(e)}
                                id="updateTimingsOpen"  
                                label="Timings Open" 
                                className={`${classes.root} ${"textField"}`} 
                                />
                            </FormRowElement>
                            <FormRowElement>
                                <TextField  
                                onChange={(e)=>onUpdateHandle(e)}
                                id="updateTimingsClose" 
                                label="Timings Close" 
                                className={`${classes.root} ${"textField"}`} 
                                />
                            </FormRowElement>
                        </FormRow>
                        <FormRow>   
                            <FormRowElement>
                                <TextField  
                                    onChange={(e)=>onUpdateHandle(e)}
                                    id="updatePhoneNumber"  
                                    label="Phone Number" 
                                    className={`${classes.root} ${"textField"}`}
                                />
                            </FormRowElement>
                            <FormRowElement>
                                <TextField  
                                onChange={(e)=>onUpdateHandle(e)}
                                id="updateEmail"  
                                label="Email" 
                                className={`${classes.root} ${"textField"}`} 
                                />
                            </FormRowElement>
                        </FormRow>
                        <FormRow>
                            <FormRowElement>
                                <TextField  
                                onChange={(e)=>onUpdateHandle(e)}
                                id="updateJobDescription" 
                                label="Job Description" 
                                className={`${classes.root} ${"textField"}`} 
                                />
                            </FormRowElement>
                            <FormRowElement>
                            <TextField
                                fullWidth
                                onChange={(e)=>onUpdateHandle(e)}
                                id="updateCategory"
                                label="Category"
                                name="state"
                                className={`${classes.root} ${"textField"}`}
                                select
                                SelectProps={{ native: true }}
                                >
                                    {category.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                    ))}
                                </TextField>
                            </FormRowElement>
                        </FormRow>
                        <FormRow>
                            <FormRowElement>
                                <TextField 
                                onChange={(e)=>onUpdateHandle(e)} 
                                id="updateAddress" 
                                label="Address" 
                                className={`${classes.root} ${"textField"}`} 
                                />
                            </FormRowElement>
                        </FormRow>
                        <FormRow>   
                            <FormRowElement>
                                <TextField  
                                    onChange={(e)=>onUpdateHandle(e)}
                                    id="updateDistrict" 
                                    label="District" 
                                    className={`${classes.root} ${"textField"}`} 
                                />
                            </FormRowElement>
                            <FormRowElement>
                                <TextField  
                                onChange={(e)=>onUpdateHandle(e)}
                                id="updatePin" 
                                label="Pin" 
                                className={`${classes.root} ${"textField"}`}
                                />
                            </FormRowElement>
                            <FormRowElement>
                                <TextField
                                fullWidth
                                onChange={(e)=>onUpdateHandle(e)}
                                id="updateState"
                                label="Select State"
                                name="state"
                                className={`${classes.root} ${"textField"}`}
                                select
                                SelectProps={{ native: true }}
                                >
                                    {states.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                    ))}
                                </TextField>
                            </FormRowElement>
                        </FormRow>
                        <FormRow>
                            <ButtonContainer>
                                <ColorButton 
                                onClick={onSubmitUpdate}
                                variant="contained" 
                                color="primary" 
                                className={classes.margin}>
                                Update
                                </ColorButton>
                            </ButtonContainer>
                        </FormRow>
                    </Form>
            </CardContainer>
           </OtherElements>
        </Profile>
    )
}

export default SPProfile
