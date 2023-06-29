import React from "react";
import './traveltype.css';


function TravelType(props) {
    return (<div className="travelcardcontainer">
            <div className="travelcard">
            <span className="traveltext">{props.traveltype}</span>
            </div>
            <img className="traveltypeimg" src={props.src}></img>
            <div className="travelcardcircle"></div>
    </div>)
}

export default TravelType;