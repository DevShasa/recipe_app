import { useEffect, useState } from "react";
import { getPopularVegetarian } from "../api/api";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function Veggie() {
  const [items, setItems] = useState([])

  useEffect(()=>{
        getPopularVegetarian()
            .then((data)=>{
                setItems(data)
            })
    },[])

return (
    <Wrapper>
        <h3>Vegetarian Picks</h3>
        <Splide
            options={{
                perPage:3,
                pagination: false,
                drag: "free",
                gap: "3rem"
            }}
        >
            {Array.isArray(items) && items.length > 0 && (
                items.map(item=>(
                    <SplideSlide key={item.id}>
                        <Link  to={`/recepie/${item.id}`}>
                            <Card >
                                <p>{item.title}</p>
                                <img src={item.image} alt={item.title}></img>
                                <Gradient />
                            </Card>
                        </Link>
                    </SplideSlide>    
                ))    
            )}
        </Splide>
    </Wrapper>
)
}

export default Veggie

// Styles
const Wrapper = styled.div`
    margin: 3rem 0rem;
`;

const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius:2rem;
        position:absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position:absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        color: white;
        transform: translate(-50%, 0%);
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute; 
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;