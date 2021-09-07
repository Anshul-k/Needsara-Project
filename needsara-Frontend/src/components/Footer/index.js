import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import {FooterContainer, 
        FooterWrap, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkItems, 
        FooterLinkTitle, 
        FooterLink,
        FooterText,
        FooterLinkSite,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink,
        Gap
        } from './FooterElements';       

const Footer = () => {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const toggleHome = () => {
		scroll.scrollToTop()
	}

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterText>
                                This application solves many problems as it helps to provide jobs to blue 
                                collar workers who are looking for opportunities and for the user it will 
                                make the process hassle free.
                            </FooterText>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Site Links</FooterLinkTitle>
                            <FooterLink to="/signup_admin">Register</FooterLink>
                            <FooterLink to="/signin">Login</FooterLink>
                            <FooterLink to="/aboutUsPage">About</FooterLink>
                            <FooterLink to="/ourTeamPage">Our Team</FooterLink>
                            <FooterLink to="/contactus">Contact us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <Gap></Gap>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Categories</FooterLinkTitle>
                            {
                                localStorage.getItem('User')
                                ?
                                <React.Fragment>
                                    <FooterLink to="/servicedetails">Appliance Repair</FooterLink>
                                    <FooterLink to="/servicedetails">Carpenter</FooterLink>
                                    <FooterLink to="/servicedetails">Sanitization & Disinfection</FooterLink>
                                    <FooterLink to="/servicedetails">Electrician</FooterLink>
                                    <FooterLink to="/servicedetails">House Cleaning</FooterLink>
                                    <FooterLink to="/servicedetails">Painter</FooterLink>
                                    <FooterLink to="/servicedetails">Pest Control</FooterLink>
                                    <FooterLink to="/servicedetails">Plumber</FooterLink>
                                    <FooterLink to="/servicedetails">Salon for Men</FooterLink>
                                    <FooterLink to="/servicedetails">Salon for Women</FooterLink>    
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <FooterLink onClick={handleClickOpen} to="#">Appliance Repair</FooterLink>
                                    <FooterLink onClick={handleClickOpen} to="#">Carpenter</FooterLink>
                                    <FooterLink onClick={handleClickOpen} to="#">Sanitization & Disinfection</FooterLink>
                                    <FooterLink onClick={handleClickOpen} to="#">Electrician</FooterLink>
                                    <FooterLink onClick={handleClickOpen} to="#">House Cleaning</FooterLink>
                                    <FooterLink onClick={handleClickOpen} to="#">Painter</FooterLink>
                                    <FooterLink onClick={handleClickOpen} to="#">Pest Control</FooterLink>
                                    <FooterLink onClick={handleClickOpen} to="#">Plumber</FooterLink>
                                    <FooterLink onClick={handleClickOpen} to="#">Salon for Men</FooterLink>
                                    <FooterLink onClick={handleClickOpen} to="#">Salon for Women</FooterLink>   
                                    <Dialog
                                    fullScreen={fullScreen}
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">{"You are not Signed in as a Customer"}</DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                            In order to use the services you need to sign in as a customer first.
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button autoFocus onClick={handleClose} color="primary">
                                            Close
                                        </Button>
                                        <Link style={{textDecoration: "none"}} to="/signin_user">
                                            <Button onClick={handleClose} color="primary" autoFocus>
                                                Sign in
                                            </Button>
                                        </Link>
                                        </DialogActions>
                                    </Dialog> 
                                </React.Fragment>
                            }
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLinkSite href="//www.facebook.com" target="_blank">Facebook</FooterLinkSite>
                            <FooterLinkSite href="//www.instagram.com" target="_blank">Instagram</FooterLinkSite>
                            <FooterLinkSite href="//www.youtube.com" target="_blank">Youtube</FooterLinkSite>
                            <FooterLinkSite href="//www.twitter.com" target="_blank">Twitter</FooterLinkSite>
                            <FooterLinkSite href="//www.linkedin.com" target="_blank">LinkedIn</FooterLinkSite>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome} >Needsara</SocialLogo>
                        <WebsiteRights> Needsara © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
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
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
