// Context.js
import React, { useState } from "react"


const data = {
    activeLink: null,
    setActiveLink: null
}

const MenuContext = React.createContext(data)

const ContextProviderComponent = (props) => {
    const { children } = props

    const [activeLink, setActiveLink] = useState("play");

    const data = {
        activeLink: activeLink,
        setActiveLink: setActiveLink
    }

    return(
        <MenuContext.Provider value={data}>{children}</MenuContext.Provider>
    )
}

export { MenuContext as default, ContextProviderComponent }