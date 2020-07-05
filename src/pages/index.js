import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"

import Layout from "../components/layout"

import Landing from "../components/homepage/landing"
import About from "../components/homepage/about-home"
// import ArticlePreview from "../components/homepage/article-preview"

// const Wrapper = styled.div`
//   margin: 0 10vw;
//   padding: 5vmin 0;
// `
// const ArticleList = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   grid-gap: 5vmin;
// `
// const SectionHeadline = styled.h2`
//   padding: 0 0 0.4em 0;
//   margin: 0 0 5vmin 0;
//   border-bottom: 1px solid;
//   border-color: ${props => props.theme.borderColor};
// `

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    // const posts = get(this, "props.data.allContentfulBlogPost.edges")

    return (
      <Layout location={this.props.location}>
        <div >
          <Helmet title={siteTitle} />
          {/* <Hero data={author.node} /> */}
          <Landing />
          <About />
          {/* <Wrapper>
            <SectionHeadline >Recent articles</SectionHeadline>
            <ArticleList >
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ArticleList>
          </Wrapper> */}
        </div>
      </Layout>
    );
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
