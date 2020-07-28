import React from 'react'
import {graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'



export const query = graphql`
  query Page2Query {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
  }
`

const Page2 = props => {
  const {data, errors} = props

  if (errors) {
    return (
    <h1>{errors}</h1>
    )
  }

  const site = (data || {}).site

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <div>
      <Helmet title={site.title}></Helmet>
      <p>{site.title}</p>
      <p>heres a new page</p>
      <Link to="/">link to the index</Link>
    </div>
  )
}

export default Page2
