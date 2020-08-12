import React, {Fragment} from 'react'
import BlockContent from '@sanity/block-content-to-react'

import '../styles/temp-project.scss'

// const serializers = {
//     types: {
//       content: props => (

//       )
//     }
// }


const projectContent = (props) => {

    const project = props

    return (
        <div className="tp-c">
            { project._rawBody ? project._rawBody.map((val, i) => {
                if (val._type == "content") {
                    return(
                        <BlockContent className="c-block c-text" blocks={val.text} />
                    )
                } else if (val._type == "contentImage") {
                    return (
                        <BlockContent
                            blocks={val.image}
                            renderContainerOnSingleChild={true}
                            className="c-block c-image"
                            projectId="wvk3aqii"
                            dataset="production"
                        />

                    )
                } else if (val._type == "imageText") {
                    return (
                        <div className="c-block c-it">
                            <BlockContent
                                blocks={val.image}
                                renderContainerOnSingleChild={true}
                                className="c-it-image"
                                projectId="wvk3aqii"
                                dataset="production"
                            />
                            <BlockContent
                                blocks={val.text}
                                renderContainerOnSingleChild={true}
                                className="c-it-text"
                            />
                        </div>

                    )
                } else if (val._type == "contentBar") {
                    return (
                        <div className="c-block c-bar"></div>
                    )
                }
            }) : null
            }
        </div>
    )
}

export default projectContent