"use client"

import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <span className="headingOfNavbar">Zaintech</span>
            <ul className="pagesLi">
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Courses</li>
            </ul>
            <div className="signupOrLoginDiv">
                <button className="signInBtn">Sign In</button>
                <button className="signUpBtn">Sign Up</button>
            </div>
        </div>
    )
}