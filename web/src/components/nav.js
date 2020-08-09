import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import MenuContext from "../components/context"


import '../styles/nav.scss' 



const nav = (props) => {

  const contextData = useContext(MenuContext);
  
  const [localLink, setLocalLink] = useState("none")

  const handleClick = (loc) => {
    contextData.setActiveLink(loc);
    setLocalLink(loc);
    console.log("LOC:" + loc)
    console.log("CONTEXT:" + contextData.activeLink)
  }

  const home = "", work = "#p-c", play = "play", about = "about"

  return(
  <MenuContext.Consumer>
    {({ activeLink }) => (
      <nav id="n" role="navigation">
      <ul>
        <div>
          <AnchorLink to={`/${home}`}><span onClick={() => {handleClick("none")}}>@ndrewgood</span></AnchorLink>
        </div>
        <div id="n-m">
          <li className="test"><AnchorLink to={`/${work}`} className={localLink == "work" || activeLink == "work" ? "active" : null }><span onClick={() => {handleClick("work")}}>Work</span></AnchorLink></li>
          <li><Link className = {localLink == "play" || activeLink == "play" ? "active" : null }>Play</Link></li>
          <li><Link to={`/${about}`} onClick={() => {handleClick("about")}} className={localLink == "about" || activeLink == "about" ? "active" : null }>About</Link></li>
          <li><Link>Resume</Link></li>
        </div>
      </ul>
  </nav>
    )}
  </MenuContext.Consumer>
  )
}

export default nav