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
        _rawCollaborators
        _rawBody
        thumbImg{
          asset{
            url
          }
        }
    }
  }
`

const ProjectTemplate = props => {
  const {data, location} = props

  const project = data && data.project


  const tpiStyle = {
    // 'backgroundColor': project.color,
    'backgroundPosition': "center",
    'backgroundSize': "100% auto"
  }

  const tpcStyle = {
    'marginTop': '100px'
  }


  const contextData = useContext(MenuContext);

  useEffect(() => {
    setTimeout(() => {
      contextData.setActiveLink("work");
      console.log("set work?")
    }, 500);

  }, []);


  return (

      <Transition location = {location}>
        <div id="tp">
        <Helmet title={project.title + " / @ndrewgood"} />
          <div className="tp-c" style={tpcStyle}>
            <div className="bar"></div>
            <ProjectHeader {...project} />
          </div>
          <div id="tp-i" style={tpiStyle}>
            <img src={project.thumbImg.asset.url}></img>
          </div>
          <ProjectContent {...project} />
        </div>
        <Footer showFoot={"showFooter"}/>
      </Transition>
  )
}

export default ProjectTemplate