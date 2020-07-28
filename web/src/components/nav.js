import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import '../styles/nav.scss' 


let at = document.getElementById("at");
let nh = document.getElementById("nh");
let nb = document.getElementById("nb");





const nav = () => {
  const data = useStaticQuery(graphql`
    query navQuery {
      site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
        title
        description
        keywords
      }
    }
  `)

  const site = (data || {}).site

  return(
  <nav id="n" role="navigation">
    <Link to="/"><p>{ site.title }</p></Link>
    <div id="ni-c">
      <Link className="ni" id="at" ><div>@</div></Link>
      <Link className="ni" ><div>W</div></Link>
      <Link className="ni" ><div>P</div></Link>
      <Link className="ni" ><div>A</div></Link>
      <Link className="ni" ><div>R</div></Link>
    </div>
    <div id="nh">
      <p>{ site.description }</p>
    </div>
    <div id="nb"></div>
  </nav>
  )
}

export default nav