import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Three from './three/hero-three'
import '../styles/hero.scss'



const hero = () => {
  const data = useStaticQuery(graphql`
    query heroQuery {
      site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
        title
        description
        keywords
      }
    }
  `)
  const site = (data || {}).site


 let ang = 180;


  return(
    <div id="h">
        <Three />
        <h2>Hi, my name is Andrew Goodridge.<br></br> I'm a UX designer and front-end developer studying at SCAD.</h2>
    </div>
  )
}

export default hero