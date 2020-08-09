import React, { useContext, useEffect } from 'react'
import {graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'

import MenuContext from '../components/context'

import Hero from '../components/hero'
import HeroTwo from '../components/hero2'
import ProjectLarge from '../components/project-large'
import ProjectSmall from '../components/project-small'
import Footer from '../components/footer'

import '../styles/project.scss'




export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }

    projects: allSanityProject(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          title
          order
          featured
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

  const contextData = useContext(MenuContext);

  useEffect(() => {
    contextData.setActiveLink("none")
    // console.log(contextData.activeLink);
  });


  return (
    <div>
      <Helmet title={site.title} />
      <Hero />
      <div id="p-c">
          { projectNodes.edges.map(({ node }) => ( 
              node.featured 
              ? <ProjectLarge {...node} /> 
              : null
            ))
          }
          <div id="p-g">
            { projectNodes.edges.map(({ node }) => ( 
                node.featured 
                ? null
                : <ProjectSmall {...node} />
              ))
            }
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage

