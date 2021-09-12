import React from "react";
import logo from "../download.png"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <nav style={{ border: "1px solid green" }}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menubar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar