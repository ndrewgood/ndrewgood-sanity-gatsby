import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import '../styles/project.scss'



const projectSmall = (props) => {

  const pStyle = {
    'width': '100%'
  }

  const piStyle = {
    'backgroundColor': props.color,
    'backgroundImage': props.thumbImg ? "url(" + props.thumbImg.asset.url + ")" : "none",
    'backgroundPosition': "center",
    'backgroundSize': "auto 100%",
    'width': '100%',
    'height': '387px'
  }

  const slug = "/" + props.slug.current
  const spookySlug = "../" + props.slug.current

  return(
    <Link to={props.spooky ? spookySlug : slug} id={props.id} style={pStyle} className="p">
      <div className="p-i" style={piStyle}></div>
      <div className="bar-small"></div>
      <div className="p-tc">
        <h1>{props.title}</h1>
        <h2>{props.type}</h2>
      </div>

    </Link>
  )
}

export default projectSmall
