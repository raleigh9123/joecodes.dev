import React from "react"
import styled, { withTheme } from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 3vw);
  }
  z-index: 10;
  min-height: 10vh;
  margin: 2.5vh 10vw;
  justify-items: center;
  align-items: center;
  align-content: center;
  @media screen and (min-width: 600px) {
    grid-auto-flow: column;
    & > *:last-child {
      grid-column: 1/3;
      grid-row: 4/5;
    }
    & > *:nth-child(5) {
      grid-row: 2/4;
    }
  }
  grid-gap: 0.5rem;
  p {
    margin: 1rem 0;
  }
  a {
    display: inline-block;
    margin: 0 2vw;
  }
  & > a,
  & > p {
    font-size: 0.9rem;
  }
`;
const SVG = styled.svg`
  stroke: ${props => props.theme.text};
  fill: ${props => props.theme.text};
  transition: 0.25s ease-out all;
  &:hover, &:focus {
    transition:0.15s ease-in all;
    fill: ${props => props.theme.linksHover}
  }
`;

const Footer = () => {
  const date = new Date();

  return (
    <Container>
      <h4>Contact</h4>
      <a href="tel:503-707-6113">(503) 707-6113</a>
      <a href="mailto:raleigh9123@gmail.com">raleigh9123@gmail.com</a>
      <h4>Socials</h4>
      <div>
        <a target="_blank" href="https://twitter.com/jo2tony">
          <SVG
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1.5rem"
            width="1.5rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"></path>
          </SVG>
        </a>
        <a target="_blank" href="https://www.instagram.com/jo2tony/">
          <SVG
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </SVG>
        </a>
      </div>

      <p>Copyright &copy; {date.getFullYear()}</p>
    </Container>
  );
}

export default withTheme(Footer)
