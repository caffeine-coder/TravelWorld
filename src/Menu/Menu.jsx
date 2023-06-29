import React from "react";
import './menu.css';
import logo from './logo.png'


function Menu() {
    return (<div className="menubarcontainer">
        <div className="itemscontainer">
            <div className="logo">
            <img src={logo} alt="Travel World" width="170" height="65"/>
            </div>
            <div className="menuitems">
                <a href='#' className="item">Home</a>
                <a href='#' className="item">Itinerary</a>
                <a href='#' className="item">Editorial</a>
                <a href='#' className="item">Membership</a>
                <a href='#' className="item">Contact Us</a>
                <button className="planbutton"><span>Plan Now</span></button>
            </div>
        </div>
    </div>)
}

export default Menu;