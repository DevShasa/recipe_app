import React, { useState } from 'react';
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"

function Search() { 

    const [ input, setInput ] = useState("");
    let navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/search/${input}`)
    }

    return (
        <FormContainer>
            <FormStyle onSubmit={(e) => handleSubmit(e)}>
                <FaSearch />
                <input 
                    type="text" 
                    placeholder="Search"
                    value= {input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </FormStyle>
        </FormContainer>
    )
}

export default Search

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const FormStyle = styled.form`
    /* border: 1px solid red; */
    width: 40%;
    position:relative;
    margin-top: 1rem;

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        outline: none;
        border-radius: 1.5rem;
        width: 100%;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        /* move 100% of icon size to the left and 50% of icon size from the top */
        transform: translate(100%, -50%);
        color: white;
    }
`;