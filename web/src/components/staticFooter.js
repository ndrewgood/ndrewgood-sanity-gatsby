import React, { useState } from 'react'
import { Link } from 'gatsby'

import '../styles/footer.scss'
import '../styles/about.scss'
import '../styles/staticFooter.scss'




const staticFooter = (props) => {

  return(
    <div className="sf-bg">
        <div className="bar-white sf-bar"></div>
        <div id="af" className="sf">
                <div id="af-l">
                <p>Feel free to email or DM me on any of my socials. Lets make something happen :-)</p>
                <a className="f-email" target="_blank" href="mailto:hey@ndrewgood.com">hey@ndrewgood.com</a>
                <p className="f-code">Website made with ❤️... and <a target="_blank" href="https://github.com/ndrewgood/ndrewgood-sanity-gatsby">code</a>.</p>
                </div>
                <div id="af-r">
                <ul>
                    <Link to="https://www.instagram.com/ndrewgood/">
                    <li>
                        <div className="link-c">
                        <p>Instagram</p>
                        <div className="arrow"></div>
                        </div>
                        <div className="f-linkBar"></div>
                    </li>
                    </Link>
                    <Link to="https://www.linkedin.com/in/ndrewgood/">
                    <li>
                        <div className="link-c">
                        <p>LinkedIn</p>
                        <div className="arrow"></div>
                        </div>
                        <div className="f-linkBar"></div>
                    </li>
                    </Link>
                    <Link to="https://github.com/ndrewgood">
                    <li>
                        <div className="link-c">
                        <p>Github</p>
                        <div className="arrow"></div>
                        </div>
                        <div className="f-linkBar"></div>
                    </li>
                    </Link>
                    <Link to="https://www.are.na/andrew-goodridge">
                    <li>
                        <div className="link-c">
                        <p>Are.na</p>
                        <div className="arrow"></div>
                        </div>
                        <div className="f-linkBar"></div>
                    </li>
                    </Link>
                    <Link to="https://open.spotify.com/user/22zbmyiz6chqqhzc6enozraoq?si=TdaGbApER0uHsWTXmowoJQ">
                    <li>
                        <div className="link-c">
                        <p>Spotify</p>
                        <div className="arrow"></div>
                        </div>
                        <div className="f-linkBar"></div>
                    </li>
                    </Link>
                </ul>
            </div>
            </div>
            <div className={props.showFoot} id="af-c-mobile">
          <div className="af-mobile-c">
              <div className="f-bar"></div>
              <p className="f-desc">Feel free to email or DM me on any of my socials. Lets make something happen :-)</p>
              <a className="f-email" target="_blank" href="mailto:hey@ndrewgood.com">hey@ndrewgood.com</a>
              <p className="f-code">Website made with ❤️... and <a target="_blank" href="https://github.com/ndrewgood/ndrewgood-sanity-gatsby">code</a>.</p>
              <ul>
                <Link to="https://www.instagram.com/ndrewgood/">
                  <li>
                    <div className="link-c">
                      <p>Instagram</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://www.linkedin.com/in/ndrewgood/">
                  <li>
                    <div className="link-c">
                      <p>LinkedIn</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://github.com/ndrewgood">
                  <li>
                    <div className="link-c">
                      <p>Github</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://www.are.na/andrew-goodridge">
                  <li>
                    <div className="link-c">
                      <p>Are.na</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
                <Link to="https://open.spotify.com/user/22zbmyiz6chqqhzc6enozraoq?si=TdaGbApER0uHsWTXmowoJQ">
                  <li>
                    <div className="link-c">
                      <p>Spotify</p>
                      <div className="arrow"></div>
                    </div>
                    <div className="f-linkBar"></div>
                  </li>
                </Link>
              </ul>
        </div>
      </div>
        </div>
  )
}

export default staticFooter