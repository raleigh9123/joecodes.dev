import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'

const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
`
const HeroImg = styled(Img)`
   /*
    Ensure golden ratio for the hero size while limiting it to some extend to
    the viewport width
  */
  height: 61.8vh;
  max-height: 400px;
`
const Wrapper = styled.div`
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
`
const SectionHeadline = styled.h1`
  padding: 0 0 0.4em 0;
  margin: 0 0 5vmin 0;
  border-bottom: 1px solid #ddd;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <Hero >
            <HeroImg
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </Hero>
          <Wrapper >
            <SectionHeadline className="section-headline">{post.title}</SectionHeadline>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </Wrapper>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
