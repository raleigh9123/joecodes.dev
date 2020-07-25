exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
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
        }
      }
    }
  `);


  if (result.errors) {
    throw result.errors;
  }

  const projectEdges = result.data.allSanityProject.edges || []

  projectEdges.forEach(({node}) => {

    const id = node.id
    const slug = node.slug.current
    const path = `/projects/${slug}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { id },
    });
  });
}
