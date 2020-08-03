import React from 'react'
import {graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import Hero from '../components/hero'
import Project from '../components/project'




export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }

    projects: allSanityProject {
      edges {
        node {
          title
          type
          color
          date(formatString: "MMMM YYYY")
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
    <h1>{errors}</h1>
    )
  }

  const site = (data || {}).site
  const projectNodes = (data || {}).projects


  return (
    <div>
      <Helmet title={site.title} />
      <Hero />
      {projectNodes.edges.map(node => (
          <Project key={node.id} {...node} />
        ))
      }
    </div>
  )
}

export default IndexPage

