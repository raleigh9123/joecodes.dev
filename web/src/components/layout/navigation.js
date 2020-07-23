import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { withTheme } from 'styled-components'

const NavContainer = styled.nav`
  position: fixed;
  z-index: 20;
  top: 0;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  width: 100vw;
  height: 10vh;
  font-size:.9rem;
  @media screen and (min-width: 900px) {
    font-size:inherit;
  }
  background: ${(props) => props.theme.background};
  li {
    transition: 0.15s;
    @media screen and (min-width: 900px) {
      padding: 0 .5vw;
      margin: 0 0.25em;
    }
  }
  li:hover {
    border-color: ${(props) => props.theme.linksHover};
    transition: 0.25s ease-in all;
  }
  & > *:nth-child(1) {
    border: none;
  }
  a {
    padding: 0 1vw;
  }
`;
const Navigation = styled.ul`
  display: grid;
  height: 10vh;
  align-items: center;
  justify-items:center;
  grid-auto-flow:column;
  overflow-y: scroll;
  list-style: none;
  padding: 0;
  margin: 0;
  & > * {
    display: grid;
    text-align: center;
    border-right:1px solid;
    border-left:1px solid;
    border-color:${props => props.theme.linksColor};
  }
  li:nth-child(1) {
    grid-column:3/4;
  }
  @media screen and (min-width:600px) {
    li:nth-child(1) {
      grid-column:3/4;
    }
  }
  @media screen and (min-width: 1000px) {
    li:nth-child(1) {
      grid-column:1/2;
    }
    width:60vw;
    margin: 0 10vw;
  }
  @media screen and (min-width: 1200px) {
    width:50vw;
    margin: 0 15vw;
  }
`;

const Nav = () => (
  <NavContainer role="navigation">
    <Navigation>
      <li>
        <Link to="/" style={{ textDecoration: "none" }}>
          Joe
          <br />
          Codes
        </Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/work/">Work</Link>
      </li>
      <li>
        <Link to="/uses/">Uses</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </Navigation>
  </NavContainer>
);

export default withTheme(Nav);
