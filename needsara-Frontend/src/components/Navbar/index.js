import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import NavbarVideo from '../../videos/NavbarVideo1.mp4'
import { 
	Nav, 
	NavbarContainer,
	NavVideoContainer,
	NavVideo, 
	MobileIcon, 
	NavMenu,
	NavItem, 
	NavLinks,
	NavLinkR,
	NavBtn,
	NavBtnLink,
} from './NavbarElements'

const Navbar = ( {toggle} ) => {

	// For Navbar Scroll
	const [scrollNav, setScrollNav] = useState(false)
	const changeNav = () => {
		if(window.scrollY >= 80) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])


	// For toggling to home
	const toggleHome = () => {
		scroll.scrollToTop()
	}

	return (
	<React.Fragment>
		<Nav scrollNav={scrollNav}>
			<NavbarContainer>
				<NavVideoContainer onClick={toggleHome}>
					<NavVideo autoPlay loop muted src={NavbarVideo} type='video/mp4' />
				</NavVideoContainer>
				<MobileIcon onClick={toggle}>
						<FaBars/>
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLinkR to="/signup_admin"
						smooth={true} duration={500} spy={true} exact='true' offset={-80}
						>List your Business
						</NavLinkR>
					</NavItem>
					<NavItem>
						<NavLinks to="services"
						smooth={true} duration={500} spy={true} exact='true' offset={-80}
						>Services
						</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to="about"
						smooth={true} duration={500} spy={true} exact='true' offset={-80}
						>About
						</NavLinks>
					</NavItem>
					{
						localStorage.getItem('User') 
						?
						<NavBtn>
							<NavBtnLink to="/user">My Account</NavBtnLink>
						</NavBtn>
						:
						localStorage.getItem('Admin')
						?
						<NavBtn>
							<NavBtnLink to="/admin">My Account</NavBtnLink>
						</NavBtn>
						:
						<NavBtn>
							<NavBtnLink to="/signin">Sign In</NavBtnLink>
						</NavBtn>
					}
				</NavMenu>
			</NavbarContainer>
		</Nav>
	</React.Fragment>
	)
}

export default Navbar

