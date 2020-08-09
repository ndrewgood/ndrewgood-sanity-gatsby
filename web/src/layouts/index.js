import React from 'react'

import Transition from '../components/transition'
import Navigation from '../components/nav'
import { ContextProviderComponent } from "../components/context"


import '../styles/layout.scss'
import '../styles/type.scss'

const Template = (props) => {

  const { children, location } = props


  return (
    <ContextProviderComponent>
      <div id="c">
        <Navigation />
        <Transition location = {location}>
          { children }
        </Transition>
      </div>
    </ContextProviderComponent>
  )
}

export default Template