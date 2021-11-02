import React from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update you account</span>
                    <span className="settingsDeleteTitle">Delete account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://cdn.pixabay.com/photo/2015/08/30/04/22/people-913778_960_720.jpg" alt="" className="" />
                        <label htmlFor="fileInput"><i className="settingsPPIcon far fa-user-circle"></i></label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Joel" />
                    <label>Email</label>
                    <input type="email" placeholder="joel@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
