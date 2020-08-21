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
  query playTempPageQuery($slug: String!) {
    play: sanityPlay(slug: {current: {eq: $slug}}) {
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

const PlayTemplate = props => {
  const {data, location} = props

  const play = data && data.play


  const tpiStyle = {
    'backgroundColor': play.color,
    'backgroundPosition': "center",
    'backgroundSize': "100% auto"
  }

  const tpidStyle = {
    'height': '600px'
  }


  const tpcStyle = {
    'marginTop': '100px'
  }


  const contextData = useContext(MenuContext);

  useEffect(() => {
    setTimeout(() => {
      contextData.setActiveLink("play");
    }, 500);

  }, []);


  return (

      <Transition location = {location}>
        <div id="tp">
        <Helmet title={play.title + " / @ndrewgood"} />
          <div className="tp-c" style={tpcStyle}>
            <div className="bar"></div>
            <ProjectHeader {...play} />
          </div>
          <div id="tp-i" style={tpiStyle}>
            {play.thumbImg 
              ? <img src={play.thumbImg.asset.url}></img>
              : <div style={tpidStyle}></div>
            }
            
          </div>
          <ProjectContent {...play} />
        </div>
        <Footer showFoot={"showFooter"}/>
      </Transition>
  )
}

export default PlayTemplate