import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding: 20px;

    @media screen and (max-width: 768px) {
        height: auto;
    }

    @media screen and (max-width: 480px) {
        height: auto;
    }
`;
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    margin-top: 50px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;
export const ServicesWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    padding: 20px 20px 20px 20px;

    @media screen and (max-width: 1144px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;
