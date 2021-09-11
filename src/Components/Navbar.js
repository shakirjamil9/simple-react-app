import React from "react";
import logo from "../download.png"

class Navbar extends React.Component {
    render(){
        return(
            <nav style={{border: "1px solid green"}}>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="menubar">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar