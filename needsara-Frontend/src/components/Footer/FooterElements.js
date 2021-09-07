import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #101522;
`;
export const FooterWrap = styled.div`
    padding: 0px 0px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;
export const FooterLinksWrapper = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
    text-align: left;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;  
        padding: 10px;
        width: 100%;
    }
`;
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 15px;
`;
export const FooterLink = styled(Link)`
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;
export const FooterLinkSite = styled.a`
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;
export const FooterText = styled.div`
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    padding: 0em 1em 0em 0em; 

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;
export const Gap = styled.div`
    display: flex;
    width: 10px;
    height: 100%;
`
export const SocialMedia = styled.section`
    display: flex;
    max-width: 1000px;
    width: 100%;
    min-height: 0;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    
    @media screen and (max-width: 820px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5em;
        justify-content: center;
        align-items: center;
    }
`;
export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin: 1em;
    font-weight: bold;
`;
export const WebsiteRights = styled.small`
    color: #fff;
    margin: 1em;
`;
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin: 1em;
`;
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    transition: 0.3s;
    
    :hover{
        transform: scale(1.1);
    }
`;
