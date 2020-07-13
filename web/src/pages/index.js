import React from "react"
// import { graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
// import styled from "styled-components"

import Layout from "../components/layout"

import Landing from "../components/homepage/home-landing"
import About from "../components/homepage/home-about"
import Projects from "../components/homepage/home-projects"

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
          <Projects />
        </div>
      </Layout>
    );
  }
}

export default RootIndex
