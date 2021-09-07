import React, { useState } from 'react'

import email from '../../Images/Email.png';
import location from '../../Images/location.png';
import phone from '../../Images/phone.png';
import shape from '../../Images/shape.png';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa' 
import './ContactUsElements.css'

import {OuterContainer, 
    BigCircle,
    Square,
    Container,
    FormContainer,
    Contactinfo, 
    Contactform, 
    Circle,
    Form,
    FormTitle,
    InputContainer,
    InputPlaceholder,
    Label,
    TextAreaPlaceholder,
    LabelTextArea,
    Submit,
    ContactinfoTitle,
    ContactinfoText,
    Info,
    Information,
    Icon,
    SocialMedia,
    SocialMediaText,
    SocialIcons,
    SocialIconLink
} from './ContactUsElements'

  
const ContactUs = () => {  
    // // // // // // // // // // // // Contact us form Start// // // // // // // // // // // //
    // //Changing the Route of Signin 
    // const signInRouteChange = useHistory();
    // function handleClick() {
    //   signInRouteChange.push("/user");
    // }

    // Contact Data to be send 
    const [contactData, setContactData] = useState({
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      contactMessage: ''
    }) 
    // Contact Handle
    function onContactHandle(e){
        const newdata ={...contactData}
        newdata[e.target.id] = e.target.value
        setContactData(newdata)
    }

    // Submitting the Contact form
    function onSubmitContact(event){
      event.preventDefault()
      fetch('http://localhost:3000/contactus',{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          name: contactData.contactName,
          email: contactData.contactEmail,
          phone: contactData.contactPhone,
          message: contactData.contactMessage
        })
      }).then(res => res.json())
        .then(data =>{
          if(data === 'success'){ 
            window.alert("Your Query Has been sent to Needsara.")
            window.location.reload(false);
          }else{
            window.alert("Something went Wrong !!!")
          }
        })
    }
// // // // // // // // // // // // Contact us form End// // // // // // // // // // // //

    return (
        <OuterContainer>
            <Container>
                <BigCircle></BigCircle>
                <Square src={shape} alt=""></Square>
                <FormContainer>
                    <Contactinfo>
                        <ContactinfoTitle>Let's get in touch</ContactinfoTitle>
                        <ContactinfoText>
                        Submit your Queries here, we will respond to your Queries within 24hrs. 
                        </ContactinfoText>
                        <Info>
                            <Information>
                                <Icon src={location} alt=""></Icon>
                                <p>Krishna Engineering College :- 95, Loni Road, Between Mohan Nagar & Air Force
                                Station, Hindon, Ghaziabad (U.P.).</p>
                            </Information>
                            <Information>
                                <Icon src={email} alt=""></Icon>
                                <p>needsara.localforvocal@gmail.com</p>
                            </Information>
                            <Information>
                                <Icon src={phone} alt=""></Icon>
                                <p>9555646943, 9719703402, 9910615359 & 8860690507</p>
                            </Information>
                        </Info>
                        <SocialMedia>
                            <SocialMediaText>Connect with Us:</SocialMediaText>
                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                                    <FaYoutube/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                    <FaTwitter/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMedia>
                    </Contactinfo>
                    <Contactform>
                        <Circle width='130' height='130' top='130' right='-40'></Circle>
                        <Circle width='80' height='80' top='10' right='30'></Circle>
                        <Form >
                            <FormTitle>Contact Us</FormTitle>
                            <InputContainer>
                                <InputPlaceholder onChange={(e)=>onContactHandle(e)} id="contactName" className="Input_area" type="text" name="name" required></InputPlaceholder>
                                <Label className="label">Name</Label>
                            </InputContainer>
                            <InputContainer>
                                <InputPlaceholder onChange={(e)=>onContactHandle(e)} id="contactEmail" className="Input_area" type="email" name="email" required></InputPlaceholder>
                                <Label className="label">Email</Label>
                            </InputContainer>
                            <InputContainer>
                                <InputPlaceholder onChange={(e)=>onContactHandle(e)} id="contactPhone" className="Input_area" type="tel" name="phone" required></InputPlaceholder>
                                <Label className="label">Phone</Label>
                            </InputContainer>
                            <InputContainer>
                                <TextAreaPlaceholder onChange={(e)=>onContactHandle(e)} id="contactMessage" className="Input_area" name="message" required></TextAreaPlaceholder>
                                <LabelTextArea className="label">Message</LabelTextArea>
                            </InputContainer>
                            <Submit onClick={onSubmitContact} type="button" value="Send"></Submit>
                        </Form>
                    </Contactform>
                </FormContainer>
            </Container>
        </OuterContainer>
    )
}


export default ContactUs
