import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import '../styles/hero2.scss' 
import Blob from '../assets/blob'



const heroTwo = () => {
  const data = useStaticQuery(graphql`
    query heroTwoQuery {
      site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
        title
        description
        keywords
      }
    }
  `)
  const site = (data || {}).site


  return(
    <div id="h2">
        <h2>Hi, my name is Andrew Goodridge.<br></br> I'm a UX designer and front-end developer studying at SCAD.</h2>
        <Blob />
    </div>
  )
}

export default heroTwo