import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from 'styled-components'

const Container = styled.div`
  &> * {
    border-bottom: 1px solid ${(props) => props.theme.borderPrimary};
  }
`;
const CoverImage = styled(Img)`
  /* width:80vw; */
`
const OtherImage = styled(Img)`
  width:50%;
  display:inline-block;
`

const Project = ({data, location, pageContext}) =>  {
  // const siteTitle = data.site.siteMetadata.title

  const { id, name, slug, subline, type, description, technical, technologies, dependencies, githubURL, demoURL, coverImage, otherImages } = data.sanityProject
  const { title } = data.site.siteMetadata

  const theData = () => {
    console.log(data);
  }

  return (
    <Layout location={location}>
      <Container onClick={() => theData()}>
        <Helmet title={title} />
        <>
          <CoverImage fluid={coverImage.asset.fluid} />
          <div>
            <div>
              <h1>{name}</h1>
              <p>{subline}</p>
              {(githubURL || demoURL) && (
                <div>
                  {githubURL && (
                    <a
                      href={githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Github Repo</span>
                    </a>
                  )}
                  {demoURL && (
                    <a href={demoURL} target="_blank" rel="noopener noreferrer">
                      <span>Visit Site</span>
                    </a>
                  )}
                </div>
              )}
            </div>
            <div>
              <h2>Description</h2>
              <p>{description}</p>
              <h2>Process</h2>
              <p>{technical}</p>
            </div>
            <div>
              <p>Technologies</p>
              <div>
                {technologies && (
                  <ul>
                    {technologies.map((technology, index) => (
                      <li key={index}>{technology}</li>
                    ))}
                    {dependencies.map((dependency, index) => (
                      <li key={index}>{dependency}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div>
              {otherImages &&
                otherImages.map((image, index) => {
                  return <OtherImage key={index} fluid={image.asset.fluid} />;
                })}
            </div>
          </div>
        </>
      </Container>
    </Layout>
  );
};

export default Project

export const data = graphql`
  query individualProject($id: String) {
    sanityProject(id: {eq: $id}) {
      id
      slug {
        current
      }
      subline
      technical
      technologies
      type
      name
      githubURL
      description
      dependencies
      demoURL
      coverImage {
        asset {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
      otherImages {
        asset {
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
    site {
    siteMetadata {
      title
    }
  }
  }
`;
