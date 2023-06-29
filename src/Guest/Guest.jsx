import React from "react";
import './guest.css';

function Guest(props) {
    return (<div className="guest">
           <div className="guestcard">
            <div className="title">{props.title}</div>
            <div className="rightcontent">
            {props.removeicon}
                <text className="count">1</text>
            {props.addicon}
            </div>
           </div>
    </div>)
}

export default Guest;