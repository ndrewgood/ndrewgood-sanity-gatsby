import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import '../styles/project.scss' 



const hero = () => {
  const data = useStaticQuery(graphql`
    query projectQuery {
      site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
        title
        description
        keywords
      }
    }
  `)
  const site = (data || {}).site

  return(
    <div className="p">
        <h1>project</h1>
    </div>
  )
}

export default hero