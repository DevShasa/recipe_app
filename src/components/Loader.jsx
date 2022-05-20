import React from 'react'
import styled from "styled-components"
import loadingGif from "../assets/giphy.gif"

function Loader() {
    return (
        <LoadingCard>
            <h3>Loading</h3>
            <img src={loadingGif} alt="loading gif"/>
        </LoadingCard>
    )
}

export default Loader

const LoadingCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        border-radius: 2rem;
    }
`;