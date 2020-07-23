import React from "react";
// import { graphql } from "gatsby"
import get from "lodash/get";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Landing from '../components/work-page/work-landing'
import TreeHouse from "../components/work-page/work-treehouse";
import Paid from "../components/work-page/work-paid";
import Extra from "../components/work-page/work-extras";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <Landing />
          <TreeHouse />
          <Paid />
          <Extra />
        </div>
      </Layout>
    );
  }
}

export default RootIndex;
