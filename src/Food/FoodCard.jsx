import React from "react";
import './foodcard.css';

function FoodCard(props) {
    return (<div className="guest">
    <div className="foodcard">
   <div className="foodtitle">{props.title}</div>
   <input className="check" type="radio"></input>
    </div>
</div>)
}

export default FoodCard;