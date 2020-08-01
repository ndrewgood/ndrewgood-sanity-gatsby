import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import '../styles/nav.scss' 



const nav = () => {
  const data = useStaticQuery(graphql`
    query navQuery {
      site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
        title
        description
        keywords
      }
    }
  `)
  const site = (data || {}).site

  return(
  <nav id="n" role="navigation">
    <div className="space"></div>
      <ul>
        <li>Work</li>
        <li>Play</li>
        <li>About</li>
        <li>Resume</li>
      </ul>
  </nav>
  )
}

export default nav