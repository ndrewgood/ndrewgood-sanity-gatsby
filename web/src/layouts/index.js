import React from 'react'

import Transition from '../components/transition'
import Navigation from '../components/nav'
import Head from '../components/head'

import '../styles/layout.scss'
import '../styles/type.scss'

class Template extends React.Component {
  render() {
    const { children, location } = this.props

    return (
      <div id="c">
        <Head />
        <Navigation />
        <Transition location = {location}>
          {children}
        </Transition>
      </div>
    )
  }
}

export default Template