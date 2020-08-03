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
      <div className="p-t">
        <div className="p-tc">
          <h1>Project Name</h1>
          <h2>Type of Project</h2>
        </div>
      </div>
      <div className="p-i"></div>
    </div>
  )
}

export default hero