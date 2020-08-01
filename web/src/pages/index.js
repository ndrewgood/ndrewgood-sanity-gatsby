import React from 'react'
import {graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import Hero from '../components/hero'
import Project from '../components/project'




export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
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


  return (
    <div>
      <Helmet title={site.title} />
      <Hero />
      <Project />
    </div>
  )
}

export default IndexPage
