import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { withTheme } from 'styled-components'

const Navigation = styled.ul`
  display: grid;
  height: 10vh;
  width: 90vw;
  align-items: center;
  justify-items:center;
  grid-auto-flow:column;
  overflow-y: scroll;
  list-style: none;
  padding: 0;
  margin: 0;
  & > * {
    display: grid;
    margin: 0 1em;
    text-align: center;
    /* padding: 0 0.5rem; */
    border-right:1px solid;
    border-left:1px solid;
    border-color:${props => props.theme.linksColor};
  }
  li {
    transition: .5s ease-in all;
    @media screen and (max-width: 900px) {
      margin: 0 .25em;
    }
  }
  li:hover {
    border-color:${props => props.theme.linksHover};
    transition: .5s;
  }
  & > *:nth-child(1) {
    border:none;
  }
  a {
    padding: 0 6px;
  }
  @media screen and (min-width: 900px) {
    width:700px;
  }
`;

const Nav = () => (
  <nav role="navigation">
    <Navigation>
      <li>
        <Link to="/" style={{textDecoration:'none'}}>
         Joe<br/>Codes
        </Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/portfolio/">Portfolio</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <Link to="/work/">Work</Link>
      </li>
      <li>
        <Link to="/uses/">Uses</Link>
      </li>
    </Navigation>
  </nav>
);

export default withTheme(Nav);
