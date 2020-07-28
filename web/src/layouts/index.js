import React from 'react'

import Transition from '../components/transition'
import Navigation from '../components/nav'

class Template extends React.Component {
  render() {
    const { children, location } = this.props

    return (
      <>
        <Navigation />
        <Transition location = {location}>
          {children}
        </Transition>
      </>
    )
  }
}

export default Template