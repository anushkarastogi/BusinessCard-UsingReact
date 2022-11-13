import React from "react";
import twitterlogo from "../images/Twitter Icon.png"
import facebooklogo from "../images/Facebook Icon.png"
import instagramlogo from "../images/Instagram Icon.png"
import githublogo from "../images/GitHub Icon.png"
export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-items">
            <img src={twitterlogo} alt="" className="footer-image"/>
            <img src={facebooklogo} alt="" className="footer-image"/>
            <img src={instagramlogo} alt="" className="footer-image"/>
            <img src={githublogo} alt="" className="footer-image"/>
            </div>
        </div>
    )
}