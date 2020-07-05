import React, { useState } from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import Navigation from "./layout/navigation"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "SilkaMono";
    src: url("../fonts/silkamono-extralight.woff2") format("woff2");
    font-weight:200;
    font-style:normal;
  }
  @font-face {
    font-family: "SilkaMono";
    src: url("../fonts/silkamono-light.woff2") format("woff2");
    font-weight:400;
    font-style:normal;
  }
  @font-face {
    font-family: "SilkaMono";
    src: url("../fonts/silkamono-regular.woff2") format("woff2");
    font-weight:600;
    font-style:normal;
  }
  @font-face {
    font-family: "SilkaMono";
    src: url("../fonts/silkamono-extralight-italic.woff2") format("woff2");
    font-weight:normal;
    font-style:italic;
  }
  html {
    font-size:15px;
    @media screen and (min-width: 400px) {
      font-size:18px;
    }
  }
  body {
    font-family: SilkaMono, sans-seriff;
    font-weight:200;
    line-height: 1.3;
    color: ${(props) => props.theme.text};
    background:${(props) => props.theme.background};
    margin: 0;
  }
  img {
    display: block;
    width: 100%;
  }
  h1,
  h2,
  h3 {
    color:${(props) => props.theme.headings};
    font-weight: normal;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: initial;
  }
  h1 {
    font-size: 2.488rem;
  }
  h2 {
    font-size: 2.075rem;
  }
  h3 {
    font-size: 1.728rem;
  }
  h4 {
    font-size: 1.44rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  p, h6 {
    font-size: 1rem;
  }
  p {
    letter-spacing: -.05rem;
  }
  a {
    color: ${(props) => props.theme.links};
    transition: .15s ease-out all;
  }
  a:hover, a:focus {
    color: ${(props) => props.theme.linksHover};
    transition: .15s ease-in all;
  }

`;
const darkTheme = {
  text: "#f7f7f7",
  secondaryText: "#959cb1",
  background: "#16171b",
  headings: "white",
  links: "white",
  linksHover: "#376df9",
  borderColor: "white",
  boxShadow: "-4px 5px 10px 3px rgba(255,255,255,0.8)",
  landingBackground: "linear-gradient( 45deg, rgba(22, 23, 27, 1) 65%, rgba(128, 255, 219, 0.8) 70%, rgba(114, 239, 221, 1) 73%, rgba(100, 223, 223, 1) 76%, rgba(86, 207, 225, 1) 79%, rgba(72, 191, 227, 1) 82%, rgba(78, 168, 222, 1) 85%, rgba(83, 144, 217, 1) 88%, rgba(94, 96, 206, 1) 91%, rgba(105, 48, 195, 1) 94%, rgba(116, 0, 184, 1) 97%)",
  landingTextBackground: "rgba(0, 0, 0, 0.2)",
};
const lightTheme = {
  text: "black",
  background: "#F5F5F5",
  headings: "#16171b",
  links: "black",
  linksHover: "#376df9",
  borderColor: "black",
  boxShadow: "-4px 5px 10px 3px rgba(0,0.0,0.8)",
  landingBackground: "linear-gradient( 45deg, rgba(245,245,245, 1) 65%, rgba(128, 255, 219, 0.8) 70%, rgba(114, 239, 221, 1) 73%, rgba(100, 223, 223, 1) 76%, rgba(86, 207, 225, 1) 79%, rgba(72, 191, 227, 1) 82%, rgba(78, 168, 222, 1) 85%, rgba(83, 144, 217, 1) 88%, rgba(94, 96, 206, 1) 91%, rgba(105, 48, 195, 1) 94%, rgba(116, 0, 184, 1) 97%)",
  landingTextBackground: "rgba(255,255,255, 0.2)",
};
const SwitchContainer = styled.div`
  position: fixed;
  color: ${props => props.theme.background};
  background-color: ${props => props.theme.text};
  bottom: 0;
  right: 0;
  margin-right: 1%;
  margin-bottom: 1%;
  padding:10px;
  border: 1px solid;
  border-color: ${props => props.theme.color};
  border-radius: 5px;
  text-align:center;
  z-index:100;
`;
const SwitchInput = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  top: 50%;
  transform: translateY(-10%);

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + span {
    background-color: #2196f3;
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  /* -webkit-transition: .4s; */
  transition: .4s;
  border-radius: 34px;
  }
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius:50%;
  }
`;


const Template = ({ children }) => {

    const [ theme, setTheme ] = useState("dark");
    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <React.Fragment>
          <GlobalStyle />
          <Navigation />
          <div>
            {children}
          </div>
        </React.Fragment>
        {/* Toggle Container to later be added to footer */}
        <SwitchContainer>
          <p>Dark/Light</p>
          <SwitchInput>
            <input onClick={themeToggler} type="checkbox" />
            <Slider />
          </SwitchInput>
        </SwitchContainer>
      </ThemeProvider>
    );
}

export default Template
