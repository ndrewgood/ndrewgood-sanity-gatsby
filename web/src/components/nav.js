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
      <ul>
        <li><Link>Work</Link></li>
        <li><Link>Play</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Resume</Link></li>
      </ul>
  </nav>
  )
}

export default nav