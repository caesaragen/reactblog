import React from 'react'
import "./sidebar.css"
import me from "../Images/me.jpg"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sideBarItem">
                <span className="sideBarTitle">
                    About Me 
                </span>
                <img src={me} alt="" srcset="" className="sideBarImg"/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis eius alias asperiores quod. Ex quae dignissimos aut autem laborum necessitatibus</p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">
                    Categories
                </span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Life</li>
                    <li className="sideBarListItem">Music</li>
                    <li className="sideBarListItem">Style</li>
                    <li className="sideBarListItem">Sport</li>
                    <li className="sideBarListItem">Cinema</li>
                    <li className="sideBarListItem">Tech</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">
                    Follow Us
                </span>
                <div className="sideBarSocial">
                <i className="sideBarIcon fa-brands fa-facebook-f"></i>
                <i className="sideBarIcon fa-brands fa-twitter-square"></i>
                <i className="sideBarIcon fa-brands fa-instagram"></i>
                <i className="sideBarIcon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}
