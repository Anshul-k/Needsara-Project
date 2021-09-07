import styled from 'styled-components'
import { Button, TextField} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

export const Container = styled.div`
    height: 80%;
    width: 70%;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 10px 10px 68px -6px rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    border-radius: 20px;

    @media screen and (max-width: 1160px){
        flex-direction: column;
    } 
     @media screen and (max-width: 1160px) and (min-width:720px){
        top: 65%;
    } 
    @media screen and (max-width: 720px){
        top: 46%;
        height: 50%;
    } 
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 0 50px;

    @media screen and (max-width: 1160px){
        width: 100%;
        height: 90%;
    } 
    @media screen and (max-width: 720px){
        display: none;
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1160px){
        width: 100%;
        height: 90%;
    } 
`
export const FormContainer = styled.div`
    display: flex;
    background: rgba(56, 211, 159, 0.95);
    width: 50%;
    height: 100%;
    padding: 50px;
    border-radius: 0px 20px 20px 0px;

    @media screen and (max-width: 1160px){
        width: 100%;
        border-radius: 0px 0px 20px 20px;
    } 
    @media screen and (max-width: 720px){
        width: 100%;
        border-radius: 20px;
    }
`
export const FormContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    margin-top: 3rem;
`
export const TextFieldContainer = styled.div`
    width: 100%;

    .TextField{
        width: 100% !important;
    }
`
export const ButtonContainer = styled.div`
    margin: 0.5em;
    display: flex;
    justify-content: center;

    .Button{
        margin: 1rem;
    }
`


export const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'rgba(255, 255, 255, 0.95)',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(255, 255, 255, 0.95)',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgba(33, 47, 60, 0.5)',
        },
        '&:hover fieldset': {
          borderColor: 'rgba(255, 255, 255, 0.95)',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgba(255, 255, 255, 0.95)',
        },
      },
    },
  })(TextField);

export const ColorButton = withStyles(() => ({
    root: {
      color: "#fff",
      borderRadius: 5,
      width: "40%",
      fontFamily: "sans-serif",
      backgroundColor: "#009B9D",
      '&:hover': {
        backgroundColor: "#236276",
      },
    },
}))(Button);