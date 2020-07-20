import React from "react"
import styled, { withTheme } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.borderPrimary};
`
const ProjectsContainer = styled.div`
  display:grid;
  h3 {
    display:grid;
    justify-items:center;
    margin:5vh auto 2vh auto;
  }
  & > ul {
    margin: auto 15vw;
    padding:0;
    display:grid;
    justify-self:center;
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
const Cards = styled.div`
  display:flex;
  margin: 2vh 0;
  padding: 2rem 0 ;
  overflow-x:scroll;
  max-width:100vw;
`;
const Card = styled.div`
  border-radius: 1rem;
  & > *:not(:first-child) {
    padding: 1vh 1vw;
  }
  flex: 10 0 75vw;
  margin: 0 2vw;
  background-color: ${(props) => props.theme.secondaryBackground};
  border: 1px solid ${(props) => props.theme.borderPrimary};
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: ease 0.2s all;
  @media screen and (min-width: 600px) and (max-width: 900px) {
    flex-basis: 40vw;
  }
  @media screen and (min-width: 900px) {
    flex-basis: 30vw;
  }
  &:first-child {
    margin-left: 4vw;
  }
  &:last-child {
    margin-right: 4vw;
  }
  &:hover,
  &:focus {
    box-shadow: ${(props) => props.theme.boxShadowHighlight};
    transition: ease 0.2s all;
    margin: 0 3vw;
    transform: translateY(-2vh) scale(1.05);
  }
  &:hover ~ &,
  &:focus ~ & {
    transition: ease 0.2s all;
  }
  position: relative;

  span {
    position: absolute;
    top: 0;
    width: 50%;
    color: #f7f7f7;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.6);
    border-radius: 1rem 0 0 0;
  }
`;
const BannerImage = styled(Img)`
  height: 25vh;
  border-radius: 1rem 1rem 0 0;
  position:relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

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
        <Cards>
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
                <Card>
                  <BannerImage
                    fluid={coverImage.asset.fluid}
                    alt={brief}
                    style={{"object-fit":"cover"}}
                  />
                  <span>{type}</span>
                  <p>{brief}</p>
                  <h2>{name}</h2>
                  <ul>
                    <h6>Technologies</h6>
                    {technologies.map(title => (
                      <li>- {title}</li>
                    ))}
                  </ul>
                </Card>
            )
          )}
        </Cards>
      </ProjectsContainer>
    </Wrapper>
  );
}

export default withTheme(Projects)
