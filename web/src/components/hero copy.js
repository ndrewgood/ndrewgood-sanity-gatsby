import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import '../styles/hero.scss' 



const hero = () => {
  const data = useStaticQuery(graphql`
    query hero3Query {
      site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
        title
        description
        keywords
      }
    }
  `)
  const site = (data || {}).site


 let ang = 180;

  const gradStyle = {
      'background': "conic-gradient(from " + ang + "deg, white, black, white, black, white, black, white)"
  }

  return(
    <div style={gradStyle} id="h">
        <h2>Hi, my name is Andrew Goodridge.<br></br> I'm a UX designer and front-end developer studying at SCAD.</h2>
        <div id="h-c"></div>
    </div>
  )
}

export default hero