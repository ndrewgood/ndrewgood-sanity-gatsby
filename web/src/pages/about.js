import React, { useEffect, useContext } from 'react'
import {graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import { MenuContext } from "../components/context"
import BlockContent from '@sanity/block-content-to-react'


import Footer from '../components/footer'

import '../styles/about.scss'
import '../styles/layout.scss'




export const query = graphql`
  query aboutQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
      _rawAboutdesc
      _rawAboutpic
    }
  }
`

const About = props => {
  const {data, errors} = props

  if (errors) {
    return (
    <h1>{errors}</h1>
    )
  }

  const site = (data || {}).site

  const contextData = useContext(MenuContext);

  useEffect(() => {
    contextData.setActiveLink("about")
    console.log("about effect triggered");

  }, []);



  return (
    <div id="a">
      <Helmet title="About / @ndrewgood" />
      <div id="a-bg"></div>
      <div id="a-c">
        <div id="a-ca">
          <div id="a-p">
            <BlockContent
              blocks={site._rawAboutpic}
              renderContainerOnSingleChild={true}
              className="a-image"
              projectId="wvk3aqii"
              dataset="production"
            />
          </div>
          <div id="a-d">
            <BlockContent 
              renderContainerOnSingleChild={true}
              className="a-desc" 
              blocks={site._rawAboutdesc} />
          </div>
        </div>
        <div className="bar-white af-bar"></div>
        <div id="af">
            <div id="af-l">
              <p>Feel free to email or DM me on any of my socials. Lets make something happen :-)</p>
              <a className="f-email" target="_blank" href="mailto:hey@ndrewgood.com">hey@ndrewgood.com</a>
              <p className="f-code">Website made with ❤️... and <a target="_blank" href="https://github.com/ndrewgood/ndrewgood-sanity-gatsby">code</a>.</p>
            </div>
            <div id="af-r">
              <ul>
                <Link to="https://www.instagram.com/ndrewgood/">
                  <li>
                    <div className="link-c">
                      <p>Instagram</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://www.linkedin.com/in/ndrewgood/">
                  <li>
                    <div className="link-c">
                      <p>LinkedIn</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://github.com/ndrewgood">
                  <li>
                    <div className="link-c">
                      <p>Github</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://www.are.na/andrew-goodridge">
                  <li>
                    <div className="link-c">
                      <p>Are.na</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://open.spotify.com/user/22zbmyiz6chqqhzc6enozraoq?si=TdaGbApER0uHsWTXmowoJQ">
                  <li>
                    <div className="link-c">
                      <p>Spotify</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
              </ul>
          </div>
        </div>
      </div>
      <div className={props.showFoot} id="af-c-mobile">
          <div className="af-mobile-c">
              <div className="f-bar"></div>
              <p className="f-desc">Feel free to email or DM me on any of my socials. Lets make something happen :-)</p>
              <a className="f-email" target="_blank" href="mailto:hey@ndrewgood.com">hey@ndrewgood.com</a>
              <p className="f-code">Website made with ❤️... and <a target="_blank" href="https://github.com/ndrewgood/ndrewgood-sanity-gatsby">code</a>.</p>
              <ul>
                <Link to="https://www.instagram.com/ndrewgood/">
                  <li>
                    <div className="link-c">
                      <p>Instagram</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://www.linkedin.com/in/ndrewgood/">
                  <li>
                    <div className="link-c">
                      <p>LinkedIn</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://github.com/ndrewgood">
                  <li>
                    <div className="link-c">
                      <p>Github</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://www.are.na/andrew-goodridge">
                  <li>
                    <div className="link-c">
                      <p>Are.na</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://open.spotify.com/user/22zbmyiz6chqqhzc6enozraoq?si=TdaGbApER0uHsWTXmowoJQ">
                  <li>
                    <div className="link-c">
                      <p>Spotify</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
              </ul>
        </div>
      </div>
    </div>
  )
}

export default About
