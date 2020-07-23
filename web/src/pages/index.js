import React from "react"
import get from "lodash/get"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../components/layout"

import Landing from "../components/homepage/landing-home"
import About from "../components/homepage/about"
import Projects from "../components/homepage/projects"

const Container = styled.div`
  overflow: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  & > * {
    border-bottom: 1px solid ${(props) => props.theme.borderPrimary};
    z-index: 5;
    scroll-snap-align: start;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

class RootIndex extends React.Component {

  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")

    return (
      <Layout location={this.props.location}>
        <Container >
          <Helmet title={siteTitle} />
          <Landing />
          <About />
          <Projects />
        </Container>
      </Layout>
    );
  }
}

export default RootIndex
