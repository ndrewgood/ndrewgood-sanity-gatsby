import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Three from './three/hero-three'
import ThreeSpooky from './three/hero-three-spooky'
import '../styles/hero.scss'

let windowWidth;

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

  const [loading, setLoading] = useState("");

  return(
    <div id="h">
        <ThreeSpooky setLoad={setLoading} animate={true} control={false}/>
        <h3 class={loading}>👻Loading...👻</h3>
        <h2>Hi, my name is Andrew Goodridge.<br></br> I'm a UX designer and front-end developer studying at SCAD.</h2>
    </div>
  )
}

export default hero