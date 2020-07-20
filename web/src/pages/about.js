import React from "react";
// import { graphql } from "gatsby"
import get from "lodash/get";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Landing from '../components/about-page/about-landing'
import Bio from "../components/about-page/about-bio"
import DevSkills from '../components/about-page/about-devskills'
import Hobbies from '../components/about-page/about-hobbies'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <Landing/>
          <Bio />
          <DevSkills />
          <Hobbies />
        </div>
      </Layout>
    );
  }
}

export default RootIndex;
