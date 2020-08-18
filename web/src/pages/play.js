import React, { useEffect, useContext } from 'react'
import {graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import { MenuContext } from "../components/context"

import ProjectSmall from '../components/project-small'



import '../styles/play.scss'
import '../styles/layout.scss'
import '../styles/project.scss'




export const query = graphql`
  query PlayPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }

    play: allSanityPlay(sort: { fields: [order], order: ASC }) {
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
          thumbImg {
            asset {
              url
            }
          }
        }
      }
    }
  }
`

const Play = props => {
  const {data, errors} = props

  if (errors) {
    return (
    <h1>{errors}</h1>
    )
  }

  const site = (data || {}).site
  const playNodes = (data || {}).play


  const contextData = useContext(MenuContext);

  useEffect(() => {
    contextData.setActiveLink("play")
    console.log("play effect triggered");
  }, []);



  return (
    <div id="pl">
      <Helmet title="Play / @ndrewgood" />
        {/* <div className="bar"></div> */}
        <div id="pl-c">
          <div id="p-g">
            { playNodes.edges.map(({ node }) => ( 
              <ProjectSmall {...node} />
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Play
