import React from "react"
import styled, { withTheme } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.borderColor};
`
const ProjectsContainer = styled.div`
  h3 {
    display:grid;
    justify-items:center;
    margin:5vh auto 2vh auto;
  }
  ul {
    margin: auto 15vw;
    padding:0;
    display:grid;
    justify-items:center;
    grid-template-columns: 1fr 1fr 1fr;
  }
  li {
    list-style:none;
  }
  li:nth-child(1) {
    justify-self:start;
  }
`;
const ProjectWrapper = styled.div`
  margin: 2vh 10vw 5vh 10vw;
  display: grid;
  grid-template-columns: auto;
  z-index: 10;
`;
const ProjectCard = styled.div`
  padding: 2vh 0;
  justify-items: center;
  align-content: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 6px 0 6px 6px;
  & > * {
    padding: 1vh 3vw;
  }
  @media screen and (min-width: 600px) {
    padding: 2vh 2vw;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1200px) {
    margin: 10vh 15vw;
    padding: 2vh 6vw;
    min-height: 66vh;
  }
  p:nth-child(1) {
    color:${props => props.theme.secondaryText}
  }
`;
const BannerImage = styled(Img)`
  height:25vh;
`

const Projects = () => {
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

  return (
    <Wrapper>
      <ProjectsContainer>
        <h3>Projects</h3>
        <ul>
          <li>Filter: </li>
          <li>Front-End</li>
          <li>Back-End</li>
        </ul>
        {data.allSanityProject.nodes.map(
          ({
            brief,
            type,
            coverImage,
            description,
            githubURL,
            id,
            liveURL,
            name,
            otherImages,
            technologies,
          }) => (
            <ProjectWrapper>
                <ProjectCard>
                  <BannerImage
                    fluid={coverImage.asset.fluid}
                    alt={brief}
                    style={{"object-fit":"cover"}}
                  />
                  <p>{type}</p>
                  <h2>{name}</h2>
                  <p>{brief}</p>
                  {/* <ul>
                    <h6>Technologies</h6>
                    {technologies.map(title => (
                      <li>- {title}</li>
                    ))}
                  </ul> */}
                </ProjectCard>
            </ProjectWrapper>
          )
        )}
      </ProjectsContainer>
    </Wrapper>
  );
}

export default withTheme(Projects)
