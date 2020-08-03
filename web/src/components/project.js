import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import '../styles/project.scss' 



const hero = (props) => {

  const pStyle = {
    'backgroundColor': props.node.color
  }

  const ptcStyle = {
    'color': props.node.color
  }

  return(
    <div id={props.key} className="p" style={pStyle}>
      <div className="p-t">
        <div className="p-tc" style={ptcStyle}>
          <h1>{props.node.title}</h1>
          <h2>{props.node.type}</h2>
        </div>
      </div>
      <div className="p-i"></div>
    </div>
  )
}

export default hero