import React from 'react'
import "./header.css"
import comp from "../../Images/comp.jpg"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Ragen's</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src={comp} alt="" className="headerImg" />
        </div>
    )
}
