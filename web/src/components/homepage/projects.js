import React from "react"
import styled, { withTheme } from "styled-components"
import { useStaticQuery, graphql } from "gatsby";

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
            subline
            type
            name
            technologies
            githubURL
            demoURL
            id
            type
            slug {
              current
            }
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

    return (
      <ProjectsContainer>
        <h3>Projects</h3>
        <ul>
          <li>Filter: </li>
          <li>Front-End</li>
          <li>Back-End</li>
          <li>Full-Stack</li>
        </ul>
        <CardCarousel data={data} />
      </ProjectsContainer>
    );
}

export default withTheme(Projects)
