import React from "react";
import './requirements.css'


function Requirements () {

return(
    <div className="requirements">
        <div className="textcontainer">
        <textarea className="text" placeholder="Submit your requirements. Sit back as we prepare your personalised itinerary. Expect a call within 30 minutes to 1 hour for payment completion"></textarea>
        </div>
        <button className="btn">Submit</button>
    </div>
)
}

export default Requirements;