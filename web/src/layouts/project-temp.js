import React from 'react'
import { graphql } from 'gatsby'
import {Helmet} from 'react-helmet'


import Transition from '../components/transition'
import Navigation from '../components/nav'

import '../styles/layout.scss'
import '../styles/type.scss'
import '../styles/temp-project.scss'

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

  const tpiStyle = {
      'backgroundColor': project.color
  }

  return (

      <Transition location = {location}>
        <div id="tp">
        <Helmet title={project.title + " / @ndrewgood"} />
          <div id="tp-c">
            <div className="bar"></div>
            <div id="tp-h">
              <div className="tp-h-b">
                <h1>{project.title}</h1>
                <h2>{project.type}</h2>
              </div>
              <div className="tp-h-bh">
                <div className="tp-h-b">
                  <h3>Date</h3>
                  <h4>{project.date}</h4>
                </div>
                <div className="tp-h-b">
                  <h3>Tools</h3>
                  <h4>{project.date}</h4>
                </div>
              </div>
              <div className="tp-h-b">
                <h3>Description</h3>
                <h4>{project.type}</h4>
              </div>
              <div className="tp-h-bv">
                <div className="tp-h-b">
                  <h3>Collaborators</h3>
                  <h4>{project.type}</h4>
                </div>
                <div className="tp-h-b">
                  <h3>Links</h3>
                  <h4>{project.date}</h4>
                </div>
              </div>
            </div>
            <div id="tp-i" style={tpiStyle}></div>
          </div>
        </div>
        
      </Transition>
  )
}

export default ProjectTemplate