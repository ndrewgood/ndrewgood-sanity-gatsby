import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import '../styles/nav.scss' 



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

  const [show, setShow] = useState(true);

  return(
  <nav id="n" role="navigation">
    <Link to="/"><p>{ site.title }</p></Link>
    <div id="ni-c">
      <Link className="ni" onClick={() => setShow(!show)} ><div>@</div></Link>
      <Link className="ni" ><div>W</div></Link>
      <Link className="ni" ><div>P</div></Link>
      <Link className="ni" ><div>A</div></Link>
      <Link className="ni" ><div>R</div></Link>
    </div>
    <div id="nh" className={show ? null : "hide" }>
      <p>{ site.description }</p>
    </div>
    <div id="nb" className={show ? null : "hide" }></div>
  </nav>
  )
}

export default nav