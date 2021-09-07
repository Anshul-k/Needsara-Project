import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinkS,
    SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ( {isOpen, toggle} ) => {
    return (   
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkS to='/signup_admin' onClick={toggle}>List your Business</SidebarLinkS>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    {
						localStorage.getItem('User') 
						?
							<SidebarRoute to="/user">My Account</SidebarRoute>
						:
						localStorage.getItem('Admin')
						?
							<SidebarRoute to="/admin">My Account</SidebarRoute>
						:
							<SidebarRoute to="/signin">Sign In</SidebarRoute>
					}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar