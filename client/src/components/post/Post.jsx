import React from 'react'
import "./post.css"
import hunger from "../../Images/hunger.jpg"

export default function Post() {
    return (
        <div className="post">
            {/* <img src={hunger} alt="" srcset="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        Music
                    </span>
                    <span className="postCat">
                        Life
                    </span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet explicabo delectus eaque, blanditiis corporis deleniti suscipit! Dignissimos enim consectetur expedita, nobis odio, pariatur at, corrupti possimus sit maxime quia vel!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet explicabo delectus eaque, blanditiis corporis deleniti suscipit! Dignissimos enim consectetur expedita, nobis odio, pariatur at, corrupti possimus sit maxime quia vel!</p> */}
            <div className="card">
                <div className="card-content">
                    <h2 className="card-title">Something Awesome</h2>
                       <div className="postCats">
                    <span className="postCat">
                        Music
                    </span>
                    <span className="postCat">
                        Life
                    </span>
                </div>
                    <p className="card-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet explicabo delectus eaque, blanditiis corporis deleniti suscipit! Dignissimos enim consectetur expedita, nobis odio, pariatur at, corrupti possimus sit maxime quia vel!
                        Lorem ipsum dolor sit amet consectetur,</p>
                    <a href="#" className="button">Read More</a>
                    <span className="postDate">1 hour ago</span>
                </div>
            </div>
        </div>
    )
}
