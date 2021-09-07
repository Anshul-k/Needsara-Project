import styled from 'styled-components'


export const SearchboxContainer = styled.div`
    background: ${({scrollNav}) => (scrollNav ? '#fff' : 'transparent')};
    width: 250px;
    height: 20px;
    position: relative;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 17px;
    z-index: 2;
    margin: 10px 10px;

    @media screen and (max-width: 768px) {
        width: 200px;
    }

    @media screen and (max-width: 480px) {
        width: 150px;
    }
     
    @media screen and (max-width: 320px) {
        width: 100px;
    }

`;
export const SearchboxIcon = styled.i`
    font-size: 22px;
    padding-top: 3px;
    color: ${({scrollNav}) => (scrollNav ? '#777' : '#fff;')};
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${({scrollNav}) => (scrollNav ? 'black' : '#777;')};
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`;
export const Searchbox = styled.input`
    flex: 1;
    height: 30px;
    border: none;
    outline: none;
    font-size: 15px;
    padding: 10px 0px;
    background: transparent;
    color: white;

    @media screen and (max-width: 768px) {
        font-size: 15px;
        width: 150px;
    }

    @media screen and (max-width: 480px) {
        width: 100px;
    }
     
    @media screen and (max-width: 320px) {
        width: 60px;
    }
`;
