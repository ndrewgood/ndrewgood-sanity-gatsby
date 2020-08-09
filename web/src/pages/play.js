import React, { useEffect, useContext } from 'react'
import {graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import { MenuContext } from "../components/context"


import '../styles/about.scss'
import '../styles/layout.scss'



export const query = graphql`
  query playQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
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

  const contextData = useContext(MenuContext);

  useEffect(() => {
    contextData.setActiveLink("play")
    console.log("play effect triggered");
  }, []);



  return (
    <div id="a">
      <div id="a-c">
        <div className="bar"></div>
        <p>play play play (plz work 🥺)</p>
      </div>
    </div>
  )
}

export default Play
