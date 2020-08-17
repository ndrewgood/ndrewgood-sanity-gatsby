import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import '../styles/footer.scss'



const footer = (props) => {

  console.log("footer loaded:")
  console.log(props.showFoot)

  return(
    <div id="f">
        <div className={props.showFoot} id="f-c">
            <div id="f-l">
              <div className="f-bar"></div>
              <p>Feel free to email or DM me on any of my socials. Lets make something happen :-)</p>
              <a className="f-email" target="_blank" href="mailto:hey@ndrewgood.com">hey@ndrewgood.com</a>
              <p className="f-code">Website made with ❤️... and code. more info <a target="_blank" href="https://github.com/ndrewgood/ndrewgood-sanity-gatsby">here</a>.</p>
            </div>
            <div id="f-r">
              <ul>
                <Link to="https://www.instagram.com/ndrewgood/">
                  <li>
                    <p>Instagram</p>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://www.linkedin.com/in/ndrewgood/">
                  <li>
                    <p>LinkedIn</p>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://github.com/ndrewgood">
                  <li>
                    <p>Github</p>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://www.are.na/andrew-goodridge">
                  <li>
                    <p>Are.na</p>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://open.spotify.com/user/22zbmyiz6chqqhzc6enozraoq?si=TdaGbApER0uHsWTXmowoJQ">
                  <li>
                    <p>Spotify</p>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
              </ul>
              </div>

        </div>
    </div>
  )
}

export default footer