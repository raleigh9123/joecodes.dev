import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navigation = styled.ul`
  display: flex;
  height:10vh;
  align-content:center;
  list-style: none;
  padding: 0;
  margin: 0;
`
const NavigationItem = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
`
export default () => (
  <nav role="navigation">
    <Navigation>
      <NavigationItem>
        <Link to="/" style={{textAlign:"right", textDecoration:'none'}}>
         Joe<br/>Codes
        </Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/blog/">Blog</Link>
      </NavigationItem>
    </Navigation>
  </nav>
);
