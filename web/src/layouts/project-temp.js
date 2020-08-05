import React from 'react'
import { graphql } from 'gatsby'

import Transition from '../components/transition'
import Navigation from '../components/nav'

import '../styles/layout.scss'
import '../styles/type.scss'

export const query = graphql`
  query projectTempPageQuery($slug: String!) {
    project: sanityProject(slug: {current: {eq: $slug}}) {
        color
        date(formatString: "MMMM YYYY")
        id
        title
        type
    }
  }
`

const ProjectTemplate = props => {
  const {data, errors} = props

  const project = data && data.project

  if (errors) {
    return (
    <h1>{errors}</h1>
    )
  }

  return (

      <Transition location = {location}>
        <h1>{project.title}</h1>
      </Transition>
  )
}

export default ProjectTemplate