import React, { useEffect }from 'react'
import { Helmet } from 'react-helmet'



import active from '../assets/active.png';
import blur from '../assets/blur.png';




const SEO = () => {

    let favicon = active;
    
    return (
        <Helmet
        link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
      />
    )
}

export default SEO