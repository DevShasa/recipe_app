import './App.css';
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Nav>
            <GiKnifeFork />
            <Logo to="/">Delicious</Logo>
          </Nav>
          <Search />
          <Category />
          <Pages />
        </div>
    </BrowserRouter>
  );
}

export default App;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2rem;
  }

  border-bottom: 1px  solid grey;
  position: sticky;
  top:0;
  background-color: white;
  z-index: 10;
`;