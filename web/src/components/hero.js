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

  const style = {
    backgroundColor: "#b4193a"
  }


  return(
    <div id="h" style={style}>
        <Three setLoad={setLoading} animate={true} control={false}/>
        <h3 className={loading}>Loading...</h3>
        <h2>Hi, my name is Andrew Goodridge.<br></br> I'm a UX designer and front-end developer studying at SCAD.</h2>
    </div>
  )
}

export default hero