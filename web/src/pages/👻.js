import React, { useContext, useEffect } from 'react'
import {graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'

import { MenuContext } from '../components/context'

import SpookyHero from '../components/hero-spooky'
import ProjectLarge from '../components/project-large'
import ProjectSmall from '../components/project-small'
import Footer from '../components/footer'
import StaticFooter from '../components/staticFooter'

import '../styles/project.scss'


let lastScrollY = 0;
let heroHeight = 0;
let indexTitle = "Home / @ndrewgood"
let showFooter = "null"


export const query = graphql`
  query SpookyIndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }

    projects: allSanityProject(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          title
          order
          featured
          type
          color
          id
          slug {
            current
          }
          date(formatString: "MMMM YYYY")
          thumbImg {
            asset {
              url
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
    <h1>{errors}</h1>
    )
  }


  const site = (data || {}).site
  const projectNodes = (data || {}).projects

  const contextData = useContext(MenuContext);

  useEffect(() => {
    contextData.setActiveLink("none")
    console.log("index effect triggered");
    window.addEventListener('scroll', handleScroll);
    showFooter = "null"
    window.scrollY >= 1000 ? showFooter = "showFooter" : "null"
    window.scrollY <= 1000 ? showFooter = "null" : "showFooter"


    return () => {
      console.log("index effect deactivated");
      window.removeEventListener('scroll', handleScroll);
      showFooter = "null"
    }
  }, []);

  


  const handleScroll = (e) => {
    lastScrollY = window.scrollY;
    heroHeight = document.getElementById('h').clientHeight;
    lastScrollY >= heroHeight ? contextData.setActiveLink("work") : null
    lastScrollY < heroHeight ? contextData.setActiveLink("none") : null

    lastScrollY < heroHeight ? indexTitle = "Work / @ndrewgood" : "Home / @ndrewgood"
    lastScrollY >= heroHeight ? indexTitle = "Home / @ndrewgood" : "Work / @ndrewgood"
    
    lastScrollY < heroHeight ? showFooter = "showFooter" : "null"
    lastScrollY >= heroHeight ? showFooter = "null" : "showFooter"
    
    console.log(showFooter)


  }


  return (
    <div>
      <Helmet title={indexTitle} site={site}/>
      <SpookyHero />
      <div id="work">
          { projectNodes.edges.map(({ node }) => ( 
              node.featured 
              ? <ProjectLarge spooky={true} {...node} /> 
              : null
            ))
          }
          <div id="p-g">
            { projectNodes.edges.map(({ node }) => ( 
                node.featured 
                ? null
                : <ProjectSmall spooky={true} {...node} />
              ))
            }
          </div>
      </div>
      {/* <Footer showFoot={showFooter} /> */}
      <StaticFooter />
    </div>
  )
}

export default IndexPage

