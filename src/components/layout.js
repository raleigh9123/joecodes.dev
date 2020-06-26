import React, { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Navigation from './navigation'

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Avenir";
  font-weight: 400;
  font-style: normal;
  src: url("/avenir-400.woff2") format("woff2");
  font-display: swap;
  }
  body {
    font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
    font-size: 1em;
    line-height: 1.65;
    color: ${props => props.theme.text};
    background:${props => props.theme.backgrounds};
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
    font-size: 2em;
    font-weight: normal;
  }
  a {
    color: currentColor;
  }
  .wrapper {
    width: calc(100% - 10vmin);
    margin: 0 auto;
    padding: 5vmin 0;
  }
  /**
  * article grid
  */
  .article-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 5vmin;
  }
  .section-headline {
    padding: 0 0 0.4em 0;
    margin: 0 0 5vmin 0;
    border-bottom: 1px solid #ddd;
  }
  .list-inline {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .list-inline li {
    display: inline-block;
  }
`
const Container = styled.div`
  max-width:1180;
  margin: '0 auto';
`

const lightTheme = {
  text: "#373F49",
  backgrounds: "#eee",
};
const darkTheme = {
  text: "#f9faff",
  backgrounds: "#000",
}

const SwitchContainer = styled.div`
  position: fixed;
  background-color: ${props => props.theme.backgrounds};
  bottom: 0;
  right: 0;
  margin-right: 1%;
  margin-bottom: 1%;
  padding:10px;
  border: 1px solid black;
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

    const [ theme, setTheme ] = useState('light');
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
          <p>Light/Dark</p>
          <SwitchInput>
            <input onClick={themeToggler} type="checkbox" />
            <Slider />
          </SwitchInput>
        </SwitchContainer>
      </ThemeProvider>
    );
}

export default Template
