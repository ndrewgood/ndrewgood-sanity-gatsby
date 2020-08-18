exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const result = await graphql(`
      {
        allSanityProject(filter: { slug: { current: { ne: null } } }) {
            edges {
                node {
                    title
                    order
                    type
                    color
                    id
                    slug {
                    current
                    }
                    date(formatString: "MMMM YYYY")
                }
            }
        }
        allSanityPlay(filter: { slug: { current: { ne: null } } }) {
          edges {
              node {
                  title
                  order
                  type
                  color
                  id
                  slug {
                  current
                  }
                  date(formatString: "MMMM YYYY")
              }
          }
      }
      }
    `)
  
    if (result.errors) {
      throw result.errors
    }
  
    const projects = result.data.allSanityProject.edges || []


    projects.forEach((edge, index) => {
      const slug = edge.node.slug.current
      const path = `/${edge.node.slug.current}`
  
      createPage({
        path,
        component: require.resolve("./src/layouts/project-temp.js"),
        context: { slug }
      })
    })

    const play = result.data.allSanityPlay.edges || []

    play.forEach((edge, index) => {
      const slug = edge.node.slug.current
      const path = `/${edge.node.slug.current}`
  
      createPage({
        path,
        component: require.resolve("./src/layouts/play-temp.js"),
        context: { slug }
      })
    })

  }