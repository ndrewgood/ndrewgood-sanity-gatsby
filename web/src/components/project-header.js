import React, {Fragment} from 'react'
import BlockContent from '@sanity/block-content-to-react'

import '../styles/temp-project.scss'

const projectCollab = (props) => {
  const project = props

  return (
    <div className="tp-h-b tp-collab">
      <h3>Collaborators</h3>
      <h4>
      {
        project.collaborators.map((v, i) => {
            return (
              <Fragment>
                <a target="_blank" href={v.portfolio}>{v.name}</a> 
                {project.collaborators.length - i !== 1 ? ", " : null}
              </Fragment>
            )
          })
        }
      </h4>
    </div>
  )
}


const projectHeader = (props) => {

    const project = props

    return (
        <div id="tp-h">
              <div className="tp-h-b">
                <h1>{project.title}</h1>
                <h2>{project.type}</h2>
              </div>
              <div className="tp-h-bh">
              {project.date ?
                <div className="tp-h-b">
                  <h3>Date</h3>
                  <h4>{project.date}</h4>
                </div>
                : null }
                <div className="tp-h-b">
                  <h3>Tools</h3>
                  <h4>{project.tools.join(", ")}</h4>
                </div>
              </div>
              <div className="tp-h-b">
                <h3>Description</h3>
                <h4>
                  <BlockContent className="tp-desc" blocks={project._rawDescription} />
                </h4>
              </div>
              <div className="tp-h-bv">
                { project._rawCollaborators !== null ? projectCollab(project) : null }
                <div className="tp-h-b">
                  <h3>Links</h3>
                  <div className="tp-h-ls">
                    {
                      project.links.map((v, i) => {
                        return (
                          <a target="_blank" href={v.url} className={v.important ? "l l-i" : "l"}>
                            <div className="link-c">
                              <h4>{v.name}</h4>
                              <div className="arrow pt-a"></div>
                            </div>
                            <div className="l-bar"></div>
                          </a>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
    )
}

export default projectHeader