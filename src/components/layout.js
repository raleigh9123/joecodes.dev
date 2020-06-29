import React, { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Navigation from './navigation'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SilkaMono';
    src: url('../fonts/silkamono-extralight.woff2') format('woff2');
    font-weight:200;
    font-style:normal;
  }
  @font-face {
    font-family: 'SilkaMono';
    src: url('../fonts/silkamono-light.woff2') format('woff2');
    font-weight:400;
    font-style:normal;
  }
  @font-face {
    font-family: 'SilkaMono';
    src: url('../fonts/silkamono-regular.woff2') format('woff2');
    font-weight:600;
    font-style:normal;
  }
  @font-face {
    font-family: 'SilkaMono';
    src: url('../fonts/silkamono-regular-italic.woff2') format('woff2');
    font-weight:bold;
    font-style:normal;
  }
  body {
    font: 200 1em SilkaMono, sans-seriff;
    /* font-size: 1em;
    line-height: 1.65; */
    color: ${(props) => props.theme.text};
    background:${(props) => props.theme.background};
    margin: 0;
    transition: all 0.15s ease-out;
  }
  img {
    display: block;
    width: 100%;
  }
  h1,
  h2,
  h3 {
    color:${props => props.theme.headings};
    font-size: 2em;
    font-weight: normal;
  }
  a {
    color: ${props => props.theme.links};
    transition: .15s ease-out all;
  }
  a:hover, a:focus {
    color: ${props => props.theme.linksHover};
    transition: .15s ease-in all;
  }

`
const Container = styled.div`
  max-width:1180;
  margin: '0 auto';
`
const darkTheme = {
  text: "#f7f7f7",
  secondaryText: "#959cb1",
  background: "#16171b",
  headings: "white",
  links: "white",
  linksHover: "#376df9",
};
const lightTheme = {
  text: "black",
  background: "white",
  headings: "#16171b",
  links: "black",
  linksHover: "#376df9",
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
  -webkit-transition: .4s;
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

    const [ theme, setTheme ] = useState('dark');
    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <React.Fragment>
          <GlobalStyle />
          <Container>
            <Navigation />
            {children}
          </Container>
        </React.Fragment>
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
