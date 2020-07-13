import React from "react"
import styled, { withTheme } from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content:center;
  z-index: 10;
  min-height:10vh;
  /* background-color: ${(props) => props.theme.landingTextBackground}; */
  margin:0 10vw;
  & > * {
    text-align:center;
  }
  & > *:nth-child(3) {
    grid-column: 1/3;
  }
`


const Footer = () => {
  const date = new Date();

  return (
    <Wrapper>
      <p>Maybe Include Contact Info</p>
      <p>Maybe Social Links??, but also add the toggle button here.</p>
      <p>Copyright &copy; {date.getFullYear()}</p>
    </Wrapper>
  )
}

export default withTheme(Footer)
