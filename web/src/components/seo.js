import React, { useEffect }from 'react'
import { Helmet } from 'react-helmet'

import active from '../assets/active.png';
import blur from '../assets/blur.png';

const SEO = (props) => {

    let favicon = active;

    let { site } = props
    
    return (
        <Helmet
        link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
        meta={[
            {
              name: `description`,
              content: props.description,
            },
            {
              property: `og:title`,
              content: props.title,
            },
            {
              property: `og:description`,
              content: props.description,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: props.title,
            },
            {
              name: `twitter:title`,
              content: props.title,
            },
            {
              name: `twitter:description`,
              content: props.description,
            },
          ]}
      />
    )
}

export default SEO