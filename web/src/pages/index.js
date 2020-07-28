import React from 'react'
import {graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'



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
      <p>{site.title}</p>
      <Link to="/page-2">link to new page</Link>
    </div>
  )
}

export default IndexPage
