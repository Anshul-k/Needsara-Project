import styled from 'styled-components'

export const OuterContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
`
export const BigCircle = styled.span`
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: linear-gradient(to bottom, #01bf71, #11ba90);
    bottom: 50%;
    right: 50%;
    transform: translate(-40%, 38%);

    :after{
        content: "";
        position: absolute;
        width: 420px;
        height: 450px;
        background-color: #fafafa;
        border-radius: 80%;
    }

    @media screen and (max-width: 850px) {
        bottom: 75%;
        transform: scale(0.9) translate(-40%, 30%);
        right: 20%;
    }
    @media screen and (max-width: 480px) {
        display: none;
    }
`
export const Square = styled.img`
    position: absolute;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(181%, 11%);
    opacity: 0.2;

    @media screen and (max-width: 850px) {
        transform: translate(140%, 43%);
        height: 350px;
    }
    @media screen and (max-width: 480px) {
        display: none;
    }
`
export const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-color: #fafafa;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 1.5rem;
    }
`
export const FormContainer = styled.div`
    width: 100%;
    max-width: 820px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 850px) {
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 480px) {
        padding: 1.7rem 1.6rem;
    }
`
export const Contactform = styled.div`
    background-color: #01bf71;
    position: relative;

    ::before {
        content: "";
        position: absolute;
        width: 26px;
        height: 26px;
        background-color: #01bf71;
        transform: rotate(45deg);
        top: 50px;
        left: -13px;

        @media screen and (max-width: 850px) {
            top: -13px;
            left: initial;
            right: 70px;
        }
    }
`
export const Circle = styled.span`
    border-radius: 50%;
    background: linear-gradient(135deg, transparent 20%, #149279);
    position: absolute;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    top: ${props => props.top}px;
    right: ${props => props.right}px;
`
export const Form = styled.form`
    padding: 2.3rem 2.2rem;
    z-index: 10;
    overflow: hidden;
    position: relative;
`
export const FormTitle = styled.h3`
    color: #fff;  
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
    margin-bottom: 0.7rem; 
`
export const InputContainer = styled.div`
    position: relative;
    margin: 1rem 0;
    width: 100% ;
`

export const InputPlaceholder = styled.input`
    width: 100%;
    outline: none;
    border: 2px solid #fafafa;
    background: #01bf71;
    padding: 0.6rem 1.2rem;
    color: #fff;
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    border-radius: 25px;
    transition: 0.3s;

    @media screen and (max-width: 480px) {
        padding: 0.45rem 1.2rem;
    }

    &:focus {
        border: 2px solid #fafafa;
    }
`
export const Label = styled.label`
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    padding: 0 0.4rem;
    color: #fafafa;
    font-size: 0.9rem;
    font-weight: 400;
    pointer-events: none;
    z-index: 1000;
    transition: 0.4s;
`
export const TextAreaPlaceholder = styled.textarea`
    width: 100%;
    outline: none;
    border: 2px solid #fafafa;
    background: #01bf71;
    color: #fff;
    font-weight: 500;
    font-size: 0.97rem;
    letter-spacing: 0.5px;
    border-radius: 25px;
    transition: 0.3s;
    padding: 0.8rem 1.2rem;
    min-height: 150px;
    border-radius: 22px; 
    resize: none;
    overflow-y: auto;

    @media screen and (max-width: 480px) {
        padding: 0.45rem 1.2rem;
    }

    &:focus {
        border: 2px solid #fafafa;
    }
`
export const LabelTextArea = styled(Label)`
    top: 1rem;
    transform: translateY(0);
`
export const Submit = styled.input`
    padding: 0.6rem 1.3rem;
    background-color: #fff;
    border: 2px solid #fafafa;
    font-size: 0.95rem;
    color: #01bf71;
    line-height: 1;
    border-radius: 25px;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    margin: 0;
    
    :hover{
        background-color: transparent;
        color: #fff; 
    }
    
    @media screen and (max-width: 480px) {
        padding: 0.45rem 1.2rem;
    }
`


export const Contactinfo = styled.div`
    background-color: #fff;
    padding: 2.3rem 2.2rem;
    position: relative;

    :before{
        content: "";
        position: absolute;
        width: 110px;
        height: 100px;
        border: 22px solid #01bf71;
        border-radius: 50%;
        bottom: -97px;
        right: 0px;
        opacity: 0.3;

        @media screen and (max-width: 850px) {
            bottom: initial;
            top: -75px;
            right: 65px;
            transform: scale(0.95);
        }
        @media screen and (max-width: 480px) {
            display: none;
        }
    }
    @media screen and (max-width: 480px) {
        padding: 1.7rem 1.6rem;
    }
`
export const ContactinfoTitle = styled.h3`
    color: #01bf71;

    @media screen and (max-width: 480px) {
        font-size: 1.15rem;
    }
`
export const ContactinfoText = styled.p`
    color: #333;
    margin: 1.5rem 0 2rem 0;

    @media screen and (max-width: 850px) {
        margin: 1rem 0 1.5rem 0;
    }    
    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`
export const Info = styled.div`

`
export const Information = styled.div`
    display: flex;
    color: #555;
    margin: 0.7rem 0; 
    align-items: center;
    font-size: 0.95rem;

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`
export const Icon = styled.img`
    width: 28px;
    margin-right: 0.7rem;
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    align-items: center;
    width: 240px;
`
export const SocialIconLink = styled.a`
    color: #01bf71;
    font-size: 24px;
    transition: 0.3s;

    :hover{
        transform: scale(1.1);
    }
    @media screen and (max-width: 480px) {
        width: 30px;
        height: 30px;
        line-height: 30px;
    }
`
export const SocialMedia = styled.div`
    padding: 2rem 0 0 0;

    @media screen and (max-width: 850px) {
        padding: 1.5rem 0 0 0;
    }
`
export const SocialMediaText = styled.p`
    color: #333;

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`