import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { MenuContext } from "../components/context"


import '../styles/nav.scss' 



const nav = (props) => {


  const home = "", work = "#p-c", play = "play", about = "about"

  return(
  <MenuContext.Consumer>
    {({ activeLink }) => (
      <nav id="n" role="navigation">
      <ul>
        <div>
          <Link to={`/${home}`}><span>@ndrewgood</span></Link>
        </div>
        <div id="n-m">
          <li><AnchorLink to={`/${work}`} className={activeLink == "work" ? "active" : null }><span>Work</span></AnchorLink></li>
          <li><Link to={`/${play}`} className = {activeLink == "play" ? "active" : null }>Play</Link></li>
          <li><Link to={`/${about}`} className = {activeLink == "about" ? "active" : null }>About</Link></li>
          <li><Link>Resume</Link></li>
        </div>
      </ul>
  </nav>
    )}
  </MenuContext.Consumer>
  )
}

export default nav