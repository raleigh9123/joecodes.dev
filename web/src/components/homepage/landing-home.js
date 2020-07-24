import React from "react";
import { withTheme } from 'styled-components'

import styled from "styled-components";

const LandingContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 90vh;
  justify-items: center;
  align-content: center;
  gap: 3vh;
  @media screen and (min-width:1000px) {
    justify-items: start;
  }
  & > * {
    z-index: 10;
    text-align: left;
    justify-self:left;
    margin: 0 10vw;
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius:0 0 0 2px;
    padding: 0 1vw;
    @media screen and (min-width:1200px) {
      margin: 0 15vw;
    }
  }
  &::after {
    z-index: 0;
    content: "";
    position: absolute;
    left: 0;
    height: 90vh;
    width: 100vw;
    background-image: linear-gradient( 45deg, ${(props) =>
      props.theme.landingBackground});
  };
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
