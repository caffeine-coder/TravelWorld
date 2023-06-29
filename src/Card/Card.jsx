import React from "react";
import './card.css';


function Card(props) {
    return (<div className="card">
            <img className="cardimage" src={props.src}></img>
            <div className="checkbox"><input type="checkbox"></input></div>
            <div className="overlay"></div>
            <span className="bottomleft"> {props.title}</span>
    </div>)
}

export default Card;