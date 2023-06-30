import React from "react";
import './newsletter.css'

function Newsletter () {

    return(<div className="newsletter">
        <div className="newstitle">Newsletter</div>
        <div className="newscontent">Subscribe to our newsletter and never miss out blogs.
        <br></br> 
        Our News letter is sent once a week every Monday.</div>
        <div className="newsinput"><input className="newstext" placeholder="Email Address" type="text"/><input type="submit"/></div>
        
    </div>)
}


export default Newsletter;