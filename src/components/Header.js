import React from "react"
import globe from "../images/planet-earth.png"

function Header() {
    return(
        <header>
            <img src={globe}/>
            <h1>My travel journal</h1>
        </header>
    )
}

export default Header