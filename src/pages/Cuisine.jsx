import { useState, useEffect } from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link, useParams} from 'react-router-dom';
import { getCuisine } from "../api/api";

function Cuisine() {

    const [ cuisine, setCuisine ] = useState([])
    const { type } = useParams();

    useEffect(()=>{
        getCuisine(type)
            .then((data)=>{
                setCuisine(data)
            })
    },[type])

    return (
        <Grid
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration:0.5}}
        >
            {cuisine.map((item)=>(
                <Card key={item.id} to={`/recepie/${item.id}`}>
                    <img src={item.image} alt={item.title}/>
                    <h4>
                        {item.title}
                    </h4>
                </Card>
            ))}
        </Grid>
    )
}

export default Cuisine

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 3rem;
`;

const Card = styled(Link)`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    text-decoration: none;
    h4{
        padding: 1rem;
        text-align:center;
    }
`