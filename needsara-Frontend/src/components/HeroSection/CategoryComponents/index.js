import React from 'react'
import styled from 'styled-components'

 // // // // // // // // // // // // // Styled Components Start // // // // // // / // // // // //
 const CategoryConatiner = styled.div`
    width: 100%;
    height: 6em;
    display: flex;
    border-bottom: 1px solid #d8d8d852;
    padding: 6px 8px ;
    align-items: center;
 `
const Thumbnail = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex: 0.4;

    img{
        width: auto;
        height: 100%;
    }
`
const CategoryName = styled.h3`
    font-size: 15px;
    color: #000;
    margin-left: 10px;
    flex: 2;
    display: flex;
`
// // // // // // // // // // // // // Styled Components End // // // // // // / // // // // //

const CategoryDisplay = (props) => {
    const { thumbnailSrc, name } = props;  
    return (
        <CategoryConatiner>
            <Thumbnail>
                <img src={thumbnailSrc} alt=""/> 
            </Thumbnail>
            <CategoryName>{name}</CategoryName>
        </CategoryConatiner>
    )
}

export default CategoryDisplay