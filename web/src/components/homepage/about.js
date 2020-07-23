import React from "react"
import { useStaticQuery, graphql, Link} from "gatsby"

import styled, { withTheme } from "styled-components"
import Img from "gatsby-image"

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  z-index: 10;
  margin: 10vh 10vw;
  padding: 2vh 0;
  justify-items: center;
  align-content: center;
  box-shadow: ${(props) => props.theme.boxShadowHighlight};
  border-radius:0 0 0 2px;
  & > * {
    padding: 1vh 3vw;
  }
  @media screen and (min-width: 600px) {
    padding:2vh 2vw;
    grid-template-columns: repeat(2, 1fr);
    min-height:66vh;
  }
  @media screen and (min-width: 1200px) {
    margin: 10vh 15vw;
    padding: 2vh 6vw;
    min-height:66vh;
  }
`;
const ContentContainer = styled.div`
  @media screen and (min-width:600px) {
    text-align:left;
  }
  text-align:center;
  div a {
    display: inline-block;
    margin: 1vh 1vw;
    text-decoration: none;
    height: 35px;
    @media screen and (min-width: 600px) {
      height: 40px;
    }

    transition: color .15s ease 0s, border .15s ease .1s;
    border-bottom: 1px solid ${(props) => props.theme.borderPrimary};
    }
  }
  div a:hover {
    border-color: ${props => props.theme.linksHover};
    transition: color .15s ease 0s, border .15s ease .1s;
  }
`;
const ImageContainer = styled.div`
  display:grid;
  align-self: center;
  .gatsby-image-wrapper {
    border-radius: 8px;
    width: 75%;
    margin: 0 auto;
  }
  .subline {
    text-align:center;
    width: 75%;
    margin: 0 auto;
    margin-bottom: 2vh;
    font-size:18px;
    letter-spacing: 1px;
    font-style: italic;
  }
  @media screen and (min-width:600px) {
    .gatsby-image-wrapper {
      grid-row:1/2;
    }
    .subline {
      grid-row:2/3;
      margin-bottom:0;
      margin-top:2vh;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "profile-picture.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <div>
      <AboutContainer>
        <ContentContainer>
          <h3>Empowering Your Business</h3>
          <p>
            I'm a software-developer building full-stack web applications for
            businesses. My goal is to help clients take their platforms to the
            web to reach a global audience.
          </p>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/raleigh9123"
            >
              <p>GitHub</p>
            </a>
            {/* <a target="_blank" href="https://www.linkedin.com/in/joseph-butterfield-853aaa90/">
              <p>LinkedIn</p>
            </a> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/jo2tony"
            >
              <p>Twitter</p>
            </a>
            <Link to="/about">
              <p>About Me</p>
            </Link>
          </div>
        </ContentContainer>
        <ImageContainer>
          <p className="subline">
            Making the internet a more functional space.
          </p>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Joseph Butterfield Profile"
          />
        </ImageContainer>
      </AboutContainer>
    </div>
  );
}

export default withTheme(About);
