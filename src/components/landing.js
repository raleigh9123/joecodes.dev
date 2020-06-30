import React from "react";
import { Link } from "gatsby";
import { withTheme } from 'styled-components'

import Img from "gatsby-image";
import styled from "styled-components";

const LandingContainer = styled.div`
  display: grid;
  border: 1px solid ${props => props.theme.landingBorderColor} ;
  border-width: 1px 0;
  width: 100vw;
  height: 90vh;
  justify-items: start;
  align-content: center;
  gap: 3vh;
  grid-template-rows: . repeat(4, 1fr) .;
  & > * {
    z-index: 10;
    background-color: ${props => props.theme.landingTextBackground};
    text-align: left;
    margin: 0 3vh;
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
    <h6>Digital Space For Small Business</h6>
  </LandingContainer>
);

export default withTheme(Landing);
