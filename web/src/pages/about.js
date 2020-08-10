import React, { useEffect, useContext } from 'react'
import {graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import { MenuContext } from "../components/context"


import '../styles/about.scss'
import '../styles/layout.scss'



export const query = graphql`
  query aboutQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
  }
`

const About = props => {
  const {data, errors} = props

  if (errors) {
    return (
    <h1>{errors}</h1>
    )
  }

  const site = (data || {}).site

  const contextData = useContext(MenuContext);

  useEffect(() => {
    contextData.setActiveLink("about")
    console.log("about effect triggered");
  }, []);



  return (
    <div id="a">
      <Helmet title="About / @ndrewgood" />
      <div id="a-c">
        <div className="bar"></div>
        <p>hi! my name is andrew goodridge and I'm a UX designer and Developer</p>
      </div>
    </div>
  )
}

export default About
