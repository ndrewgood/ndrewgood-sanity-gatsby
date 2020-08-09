import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import '../styles/project.scss'




const projectLarge = (props) => {

  const pStyle = {
    'width': '800px'
  }

  const piStyle = {
    'backgroundColor': props.color,
    'width': '800px',
    'height': '400px'
  }


  return(
    <Link to={props.slug.current} id={props.id} style={pStyle} className="p">
      <div className="p-i" style={piStyle}></div>
      <div className="bar"></div>
      <div className="p-tc">
        <h1>{props.title}</h1>
        <h2>{props.type}</h2>
      </div>
    </Link>
  )
}

export default projectLarge


// return(
//   <div id={props.node.id} className="p" style={pStyle}>
//     <div className="p-t">
//      <Link to={props.node.slug.current}><div className="p-tc" style={ptcStyle}>
//         <h1>{props.node.title}</h1>
//         <h2>{props.node.type}</h2>
//       </div></Link>
//     </div>
//     <Link to={props.node.slug.current}><div className="p-i"></div></Link>
//   </div>
// )