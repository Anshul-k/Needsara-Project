import styled from 'styled-components'

export const CardContainer = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 8px 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.1s ease-in-out;

    &:hover {
        transform: scale(1.05);
        transition: all 0.1s ease-in-out;
        cursor: pointer;
    }
`;
export const ImageContainer = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom : 10px;
`;
export const CardH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 8px;
`;
export const CardP = styled.p`
    font-size: 1rem;
    text-align: center;
`;
