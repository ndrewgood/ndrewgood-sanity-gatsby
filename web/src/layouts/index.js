import React, { useState } from 'react'

import Transition from '../components/transition'
import Navigation from '../components/nav'
import { MenuContext } from "../components/context"


import '../styles/layout.scss'
import '../styles/type.scss'

const Template = (props) => {

  const { children, location } = props

  const [activeLink, setActiveLink] = useState("none");

  const data = {
      activeLink: activeLink,
      setActiveLink: (p) => {setActiveLink(p); console.log("from data: " + activeLink)}
  }


  return (
    <MenuContext.Provider value={data}>
      <div id="c">
        <Navigation />
        <Transition location = {location}>
          { children }
        </Transition>
      </div>
    </MenuContext.Provider>
  )
}

export default Template