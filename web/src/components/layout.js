import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import CircleLoader from 'react-spinners/CircleLoader'

import Navigation from "./layout/navigation"
import ThemeToggle from "./layout/theme-toggle"
import Footer from "./layout/footer"

const GlobalStyle = createGlobalStyle`
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
  secondaryBackground: "#121214",
  headings: "white",
  links: "white",
  linksHover: "#376df9",
  borderPrimary: "white",
  boxShadow: "-13px 11px 10px -8px rgba(255,255,255,0.8)",
  boxShadowHighlight: "-13px 11px 10px -8px rgba(72, 191, 227,0.8)",
  textShadow: "1px 2px 1px rgba(0,0,0,0.6)",
  landingBackground: "rgba(22, 23, 27, 1) 65%, rgba(128, 255, 219, 0.8) 70%, rgba(114, 239, 221, 1) 73%, rgba(100, 223, 223, 1) 76%, rgba(86, 207, 225, 1) 79%, rgba(72, 191, 227, 1) 82%, rgba(78, 168, 222, 1) 85%, rgba(83, 144, 217, 1) 88%, rgba(94, 96, 206, 1) 91%, rgba(105, 48, 195, 1) 94%, rgba(116, 0, 184, 1) 97%",
  landingTextBackground: "rgba(0, 0, 0, 0.2)",
};
const lightTheme = {
  text: "black",
  background: "#F9F9F9",
  secondaryBackground: "white",
  headings: "#16171b",
  links: "black",
  linksHover: "#376df9",
  borderPrimary: "black",
  boxShadow: "-13px 11px 10px -8px rgba(0,0,0,0.8)",
  boxShadowHighlight: "-13px 11px 10px -8px rgba(105, 48, 195,0.8)",
  textShadow: "1px 2px 2px rgba(255,255,255,0.6)",
  landingBackground: "rgba(245,245,245, 1) 65%, rgba(128, 255, 219, 0.8) 70%, rgba(114, 239, 221, 1) 73%, rgba(100, 223, 223, 1) 76%, rgba(86, 207, 225, 1) 79%, rgba(72, 191, 227, 1) 82%, rgba(78, 168, 222, 1) 85%, rgba(83, 144, 217, 1) 88%, rgba(94, 96, 206, 1) 91%, rgba(105, 48, 195, 1) 94%, rgba(116, 0, 184, 1) 97%",
  landingTextBackground: "rgba(255,255,255, 0.2)",
};
const Children = styled.div`
  margin-top: 10vh;
`;


const PageLayout = ({ children }) => {

    const [ theme, setTheme ] = useState("dark");
    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light")
    }
    const [loading, isLoaded ] = useState(true);
    const loadingToggle = () => {
      loading && isLoaded(false)
    }
    useEffect(() => {
      loadingToggle()
    })

    return (
      <div>
        {loading === true ? (
          <CircleLoader
            css={{
              margin: "0 auto",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            color={"#4A90E2"}
            size={50}
            loading={loading === true}
          />
        ) : (
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <React.Fragment>
              <GlobalStyle />
              <Navigation />
              <Children>
                {children}
              </Children>
              <Footer />
              <ThemeToggle themeToggle={themeToggler} />
            </React.Fragment>
          </ThemeProvider>
        )}
      </div>
    );
}

export default PageLayout
