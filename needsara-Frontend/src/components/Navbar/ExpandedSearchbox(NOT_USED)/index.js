import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {SearchboxContainer, SearchboxIcon, Searchbox} from './ExpandedSearchboxElements'

const ExpandedSearchbox = (scrollNav) => {
    return (
        <SearchboxContainer scrollNav={scrollNav}>
            <Searchbox placeholder="Search here"></Searchbox> 
            <SearchboxIcon scrollNav={scrollNav}>
                <FiSearch/>
            </SearchboxIcon>
        </SearchboxContainer>
    )
}

export default ExpandedSearchbox
