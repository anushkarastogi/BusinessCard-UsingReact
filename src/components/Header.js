import React from "react";
import profileLogo from "../images/ProfileLogo.png"
export default function Header(){
    return(
        <div className="header-container">
            <img src={profileLogo} alt="" width="317px" height="280px" />
        </div>
    )
}