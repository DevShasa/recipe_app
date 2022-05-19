import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from "styled-components";  
import { NavLink } from "react-router-dom";

function Category() {
    return (
        <IconWrapper>
            <StyledLink to={"/cuisine/Italian"}> <FaPizzaSlice /> <h4>Italian</h4> </StyledLink>
            <StyledLink to={"/cuisine/American"}> <FaHamburger /> <h4>American</h4> </StyledLink>
            <StyledLink to={"/cuisine/Thai"}> <GiNoodles /> <h4>Thai</h4> </StyledLink>
            <StyledLink to={"/cuisine/Chinese"}> <GiChopsticks /> <h4>Chinese</h4> </StyledLink>
        </IconWrapper>
    )
}

export default Category

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;  

const StyledLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration:none;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color:white;
    h4{
        color:inherit;
        color:0.8rem;
    }
    svg{
        font-size: 1.7rem;
    }
    background: linear-gradient(35deg, #494949, #313131);
    width:6rem;
    height:6rem;
    transform: scale(0.8);

    /* add a .active css class to the element */
    &.active{
        background: linear-gradient(to right, #f27121, #e94057)
    }
`;