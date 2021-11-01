import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./topBar.css"
import pic from '../../Images/hunger.jpg'

const TopBar = () => {
    return (
        <div className="top">
            <div className="topLeft"><i className="topIcon fa-brands fa-facebook-f"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img src={pic} alt="" srcset="" className="topImg" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar
