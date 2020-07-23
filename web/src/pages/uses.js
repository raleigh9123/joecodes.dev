import React from "react";
// import { graphql } from "gatsby"
import get from "lodash/get";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Landing from "../components/uses-page/uses-landing";
import Site from "../components/uses-page/uses-site";
import Setup from "../components/uses-page/uses-setup";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <Landing />
          <Site />
          <Setup />
        </div>
      </Layout>
    );
  }
}

export default RootIndex;
