import React, { useState, useEffect } from "react"
import styled, { withTheme } from "styled-components"
import { useStaticQuery, graphql } from "gatsby";
import { wrap } from "@popmotion/popcorn";

import CardCarousel from './projects/card-carousel';

const ProjectsContainer = styled.div`
  display:grid;
  h3 {
    display:grid;
    justify-items:center;
    margin:5vh auto 2vh auto;
  }
  & > ul {
    @media screen and (min-width:600px) {
      margin: auto 15vw;
    }
    margin-bottom: -2vh;
    padding:0;
    display:grid;
    justify-self:center;
    justify-items:center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:1fr 1fr;
    @media screen and (min-width:600px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }
  li {
    padding: 1vh 0;
    justify-self:stretch;
    list-style:none;
  }
  li:nth-child(1) {
    grid-row:1/3;
    @media screen and (min-width:600px) {
      grid-row:1;
      justify-self:start;
    }
  }
`;


const Projects = (props) => {
  const data = useStaticQuery(graphql`
    {
      allSanityProject {
        nodes {
          description
          brief
          type
          name
          technologies
          liveURL
          githubURL
          id
          type
          coverImage {
            asset {
              fluid {
                aspectRatio
                base64
                src
                srcSet
                sizes
              }
            }
          }
          otherImages {
            asset {
              fluid {
                aspectRatio
                base64
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `);

    const clientViewPortSetInitialScroll = () => {
      console.log(document.body.clientWidth);
    }

    useEffect (() => {
      clientViewPortSetInitialScroll()
      window.addEventListener("resize", clientViewPortSetInitialScroll)
    })

    // Calculate the number of slides // Demo = 3
    const numSlides = data.allSanityProject.nodes.length;
    //Wrapping wrap(0, 3, 3) returns 0
    // useState save the active index and provide function to change active index
    const [[currentScroll, activeIndex], setActiveSlide] = useState([450, 1]);

    const incrementSlide = (slideDirection, selectedIndex) => {
      setSlide(slideDirection, selectedIndex);
    };

    //Function will make the selected slide activeSlide and move shift all slides
    const setSlide = (slideDirection) => {
      const newActiveSlide = wrap(0, numSlides, activeIndex)
    }

    return (
      <ProjectsContainer>
        <h3>Projects</h3>
        <ul>
          <li>Filter: </li>
          <li>Front-End</li>
          <li>Back-End</li>
          <li>Full-Stack</li>
        </ul>
        <CardCarousel
          data={data.allSanityProject.nodes}
          numSlides={numSlides}
          activeIndex={activeIndex}
        />
      </ProjectsContainer>
    );
}

export default withTheme(Projects)
