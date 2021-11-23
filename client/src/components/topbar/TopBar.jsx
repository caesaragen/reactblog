import React from 'react'
import "./topBar.css"
import pic from '../../Images/hunger.jpg'
import { Link } from 'react-router-dom';

const TopBar = () => {
    const user = false;
    return (
        <nav className="top navbar navbar-expand-lg navbar-light bg-light">
            <div className="topLeft collapse navbar-collapse"><i className="topIcon fa-brands fa-facebook-f"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="topCenter collapse navbar-collapse" id="navbarNav">
                <ul className="topList">
                    <li className="topListItem nav-item">
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li className="topListItem nav-item">
                        <Link to="" className="link">About</Link>
                    </li>
                    <li className="topListItem nav-item">
                        <Link to="" className="link">Contact</Link>
                    </li>
                    <li className="topListItem nav-item">
                        <Link to="/write" className="link">Write</Link>
                    </li>
                    <li className="topListItem nav-item">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight collapse navbar-collapse">
                {user ? (<img src={pic} alt="" srcset="" className="topImg" />) : (<ul className="topList"><li className="topListItem"><Link to="/login" className="link">Login</Link></li>
                    <li className="topListItem nav-item"> <Link to="/register" className="link">Register</Link></li></ul>)}

                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </nav>
    )
}

export default TopBar
