import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import '../styles/footer.scss'



const footer = (props) => {


  return(
    <div id="f" class={props.scrollY > props.heroHeight ? "showFoot" : null}>
        <div id="f-c">
            <div id="f-l">
              <h1>@ndrewgood 1</h1>
              <h1>@ndrewgood 2</h1>
            </div>
            <div id="f-r">
            <p>find me on the internet:</p>
            <ul>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Github</li>
              <li>Are.na</li>
              <li>Spotify</li>
            </ul>
            </div>

        </div>
    </div>
  )
}

export default footer