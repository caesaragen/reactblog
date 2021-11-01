import React from 'react'
import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className="fas fa-plus writeIcon"></i></label>
                    <input type="file" id="fileInput" style={ {display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" id="" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
