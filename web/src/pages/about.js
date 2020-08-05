import React from 'react'
import {graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'



export const query = graphql`
  query aboutQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
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



  return (
    <div>
      <p>about</p>
    </div>
  )
}

export default About
