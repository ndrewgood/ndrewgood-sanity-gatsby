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


    return (
        <div className="tp-c">
            { props._rawBody ? props._rawBody.map((val, i) => {
                console.log(i + ": "+ val._type);
                if (val._type == "content") {
                    return(
                        <BlockContent 
                        renderContainerOnSingleChild={true}
                        className="c-block c-text" 
                        blocks={val.text} />
                    )
                } else if (val._type == "contentImage") {
                     if (val.size == "cont-width"){
                        return (
                            <BlockContent
                                blocks={val.image}
                                renderContainerOnSingleChild={true}
                                className="c-block c-image"
                                projectId="wvk3aqii"
                                dataset="production"
                            />
                        )
                    } else if (val.size == "full-width"){
                        return (
                            <BlockContent
                                blocks={val.image}
                                renderContainerOnSingleChild={true}
                                className="c-image-full"
                                projectId="wvk3aqii"
                                dataset="production"
                            />
                        )
                    }
                } else if (val._type == "imageText") {
                    if (val.layout == "image-left") {
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
                    } else if (val.layout == "image-right") {
                        return (
                            <div className="c-block c-it">
                                <BlockContent
                                    blocks={val.text}
                                    renderContainerOnSingleChild={true}
                                    className="c-it-text"
                                />
                                <BlockContent
                                    blocks={val.image}
                                    renderContainerOnSingleChild={true}
                                    className="c-it-image"
                                    projectId="wvk3aqii"
                                    dataset="production"
                                />
                            </div>
                        )
                    }
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