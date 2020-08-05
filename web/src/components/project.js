import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import '../styles/project.scss' 



const hero = (props) => {

  const pStyle = {
    'backgroundColor': props.node.color
  }

  const ptcStyle = {
    'color': props.node.color
  }

  return(
    <div id={props.node.id} className="p" style={pStyle}>
      <div className="p-t">
       <Link to={props.node.slug.current}><div className="p-tc" style={ptcStyle}>
          <h1>{props.node.title}</h1>
          <h2>{props.node.type}</h2>
        </div></Link>
      </div>
      <Link to={props.node.slug.current}><div className="p-i"></div></Link>
    </div>
  )
}

export default hero