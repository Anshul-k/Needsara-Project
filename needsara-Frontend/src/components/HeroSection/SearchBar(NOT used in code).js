import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { IoClose, IoSearch   } from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickOutside } from 'react-click-outside-hook'
import { MoonLoader } from 'react-spinners'
import { useDebounce } from '../../hooks/debounceHook'
import axios from 'axios'
import CategoryDisplay from './CategoryComponents'
// // // // // // // // // // // // Styled Components Start // // // // // // // // // // // // // //
const SearchBarContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 32em;
    height: 3.8em;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0px 2px 12px 3px rgba(0,0,0,0.14);
    /* overflow: hidden; */
`

const SearchBarInputContainer = styled.div`
    width: 100%;
    min-height: 4em;
    display: flex;
    align-items: center;
    position: relative;
    padding: 15px;
`
const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    font-size: 18px;
    color: #12112e;
    border-radius: 6px;
    background-color: transparent;

    &:focus{
        outline: none;
        &::placeholder{
            opacity: 0;
        }
    }

    &::placeholder{
        color: #bebebe;
        transition: all 250ms ease-in-out;
    }
`
const SearchIcon = styled.span`
    color: #bebebe;
    font-size: 37px;
    margin-right: 10px;
    margin-top: 6px;
    vertical-align: middle; 
`
const CloseIcon = styled(motion.span)`
    color: #bebebe;
    font-size: 23px;
    vertical-align: middle;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover{
        color: #000;
    }
`
const LineSeperator = styled.span`
    display: flex;
    min-width: 100%;
    min-height: 2px;
    background-color: #d8d8d878;
`
const SearchContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    overflow-y: auto;
`
const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const WarningMessage = styled.div`
    color: #a1a1a1;
    font-size: 14px;
    display: flex;
    align-self: center;
    justify-self: center;
`
// // // // // // // // // // // // Styled Components End // // // // // // // // // // // // // //
const containerVariants = {
    expanded: {
        height: "20em",
    },
    collapsed: {
        height: "3.8em",
    }
}

const containerTransition = {
    type: 'spring',
    damping: 22,
    stiffness: 150
}

const SearchBar = () => {

    const [isExpanded, setExpanded] = useState(false);
    const [parentRef, isClickedOutside ] = useClickOutside();
    const inputRef = useRef();
    const [searchQuery, setSearchQuery] = useState("")
    const [isLoading, setLoading] = useState(false) 
    const [categories, setCategories] = useState([])
    const [noCategories, setNoCategories] = useState(false)

    const isEmpty =  !categories || categories.length === 0;

    const changeHandler = (e) => {
        e.preventDefault();
        if(e.target.value.trim() === "")
            setNoCategories(false)
        setSearchQuery(e.target.value);
    }

    const expandContainer = () => {
        setExpanded(true);
    }

    const collapseContainer = () => {
        setExpanded(false);
        setSearchQuery("");
        setLoading(false)
        setCategories([])
        setNoCategories(false)
        if(inputRef.current)
            inputRef.current.value = "";
    }

    useEffect(() => {
        if(isClickedOutside)
            collapseContainer();
    }, [isClickedOutside]);

    const prepareSearchQuery = (query) => {
        const url = `https://api.tvmaze.com/search/shows?q=${query}`;
        return encodeURI(url);
    }

    const searchCategory = async () => {
        if(!searchQuery || searchQuery.trim() === "")
            return;

        setNoCategories(false);
        setLoading(true);
        const URL = prepareSearchQuery(searchQuery);
        const response = await axios.get(URL).catch((err) => {
            console.log("Error: ", err);
        });
        if(response){
            console.log("Response: ", response.data)
            if(response.data && response.data.length === 0)
                setNoCategories(true)
            setCategories(response.data);
        }
        setLoading(false);
    }

    useDebounce(searchQuery, 500, searchCategory);

    return (
        <SearchBarContainer 
        animate={isExpanded ? "expanded" : "collapsed"} 
        variants={containerVariants}
        transition={containerTransition}
        ref={parentRef}
        >
            <SearchBarInputContainer>
                <SearchIcon>
                    <IoSearch/>
                </SearchIcon>
                <SearchInput
                onFocus={expandContainer}
                placeholder="Search here for Services"
                ref={inputRef}
                value={searchQuery}
                onChange={changeHandler}
                />
                <AnimatePresence>
                    {isExpanded &&(
                        <CloseIcon 
                        key="close-icon" 
                        initial={{ opacity:0 }} 
                        animate={{ opacity:1 }}
                        exit={{ opacity:0 }} 
                        onClick={collapseContainer}
                        transition={{ duration: 0.2 }}
                        >
                            <IoClose/>
                        </CloseIcon>
                    )}
                </AnimatePresence>
            </SearchBarInputContainer>
            { isExpanded && <LineSeperator/>}
            { isExpanded && ( <SearchContent>
                {isLoading && (
                    <LoadingWrapper>
                    <MoonLoader 
                        loading
                        color="#000"
                        size={20}
                    />
                    </LoadingWrapper>
                )}
                {!isLoading && isEmpty && !noCategories && <LoadingWrapper><WarningMessage>Start Typing to Search</WarningMessage></LoadingWrapper>}
                {!isLoading && noCategories && <LoadingWrapper><WarningMessage>No Category found</WarningMessage></LoadingWrapper>}
                {!isLoading && !isEmpty && <React.Fragment>
                        {
                            categories.map((category) => (
                                <CategoryDisplay 
                                key={category.id}
                                thumbnailSrc={category.image && category.image.medium} 
                                name={category.name} 
                                />
                            ))
                        }
                    </React.Fragment>}
            </SearchContent>
        )}
        </SearchBarContainer>
    )
}

export default SearchBar
