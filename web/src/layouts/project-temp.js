import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import {Helmet} from 'react-helmet'

import { MenuContext } from '../components/context'


import Transition from '../components/transition'
import ProjectHeader from '../components/project-header'
import ProjectContent from '../components/project-content'
import Footer from '../components/footer'


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
        collaborators {
          name
          portfolio
        }
        tools
        links {
          name
          url
          important
        }
        _rawDescription
        _rawBody
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

  const tpcStyle = {
    'marginTop': '100px'
  }


  const contextData = useContext(MenuContext);

  useEffect(() => {
    contextData.setActiveLink("work")
  }, []);


  return (

      <Transition location = {location}>
        <div id="tp">
        <Helmet title={project.title + " / @ndrewgood"} />
          <div className="tp-c" style={tpcStyle}>
            <div className="bar"></div>
            <ProjectHeader {...project} />
          </div>
          <div id="tp-i" style={tpiStyle}></div>
          <ProjectContent {...project} />
        </div>
        <Footer />
      </Transition>
  )
}

export default ProjectTemplate