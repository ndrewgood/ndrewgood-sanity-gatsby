// Context.js
import React, { useState } from "react"


const data = {
    activeLink: "none",
    setActiveLink: () => {}
}

const MenuContext = React.createContext(data)

export { MenuContext }