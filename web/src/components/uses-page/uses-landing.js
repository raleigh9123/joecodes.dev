import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  border-bottom: 1px solid ${(props) => props.theme.borderPrimary};
  width: 100vw;
  height: 90vh;
  justify-items: center;
  align-content: center;
  gap: 3vh;
  @media screen and (min-width: 1000px) {
    justify-items: start;
  }
  & > * {
    z-index: 10;
    margin: 0 10vw;
    padding: 0 1vw;
    @media screen and (min-width: 1200px) {
      margin: 0 15vw;
    }
  }
  h4 {
    font-style: italic;
  }
  &::after {
    z-index: 0;
    content: "";
    position: absolute;
    left: 0;
    height: 90vh;
    width: 100vw;
    background-image: linear-gradient(
      45deg,
      ${(props) => props.theme.landingBackground}
    );
  }
`;

const Landing = () => {
  return (
    <Container>
      <p>joecodes.io</p>
      <h1>Uses</h1>
      <h4>What I Use</h4>
      <h6> — Reaching Digital Space — </h6>
    </Container>
  );
};

export default Landing;
