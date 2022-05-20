import React, { useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import { getSearched } from "../api/api";
import styled from "styled-components";


function SearchResults() {

    const [searchResults, setSearchResults] = useState([])
    const { searchterm } = useParams();

    useEffect(()=>{
        getSearched(searchterm)
            .then((result)=>{
                setSearchResults(result)
            })
    }, [searchterm])

    return (
        <div>
            {searchResults.length === 0
                ? <p>Loading</p>
                : (
                    <Grid>
                        {searchResults.map((item)=>(
                            <Link to={`/recepie/${item.id}`}>
                                <Card key={item.id}>
                                    <img src={item.image} alt={item.title}/>
                                    <h4>
                                        {item.title}
                                    </h4>
                                </Card>
                            </Link>
                        ))}
                    </Grid>
                )
            }

        </div>
    )
}

export default SearchResults

const  Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        padding: 1rem;
        text-align: center;
    }
`;