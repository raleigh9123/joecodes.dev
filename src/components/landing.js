import React from "react";
import { withTheme } from 'styled-components'

import styled from "styled-components";

const LandingContainer = styled.div`
  display: grid;
  border: 1px solid ${props => props.theme.borderColor} ;
  border-width: 1px 0;
  width: 100vw;
  height: 90vh;
  justify-items: center;
  align-content: center;
  gap: 3vh;
  grid-template-rows: . repeat(4, 1fr) .;
  @media screen and (min-width:1000px) {
    justify-items: start;
  }
  & > * {
    z-index: 10;
    background-color: ${props => props.theme.landingTextBackground};
    text-align: left;
    justify-self:left;
    margin: 0 10vw;
    box-shadow: ${props => props.theme.landingTextBoxShadow};
    border-radius:2px;
    padding: 0 1vw;
  }
  &::after {
    z-index: 0;
    content: "";
    position: absolute;
    left: 0;
    height: 90vh;
    width: 100vw;
    background-image: ${props => props.theme.landingBackground}
  }
`;

const Landing = (props) => (
  <LandingContainer>
    <p>joecodes.dev</p>
    <h1>
      <span>Joseph</span>
      <br />
      <span>Butterfield</span>
    </h1>
    <h4>Full-Stack Web Developer</h4>
    <h6> — Reaching Digital Space — </h6>
  </LandingContainer>
);

export default withTheme(Landing);
