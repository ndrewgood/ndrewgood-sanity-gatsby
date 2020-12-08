import React, { useState, useEffect } from 'react'

import Transition from '../components/transition'
import Navigation from '../components/nav'
import { MenuContext } from "../components/context"
import SEO from '../components/seo'


import '../styles/layout.scss'
import '../styles/type.scss'

const Template = (props) => {

  

  const { children, location } = props

  const [activeLink, setActiveLink] = useState("none");

  const data = {
      activeLink: activeLink,
      setActiveLink: (p) => {setActiveLink(p)}
  }

  useEffect(() => {
    console.log("👀 I see we have a sneaky visiter... 👀");
    console.log("🙏 But fr, thanks for checking out my website and being interested in how it works! 🙏");
    console.log("⭐️ Github link is in the footer, but if you're at all interested in what I do, feel free to reach out! I promise I don't bite... ⭐️");  
  }, []);

 
  return (
    <MenuContext.Provider value={data}>
      <div id="c">
        <SEO />
        <Navigation />
        <Transition location = {location}>
          { children }
        </Transition>
      </div>
    </MenuContext.Provider>
  )
}

export default Template