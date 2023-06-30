import React from "react";
import './footer.css';
import logo from '../images/logo.png'
import {FaFacebook, FaSquareInstagram,FaTwitter, FaYoutube }  from 'react-icons/fa';

function Footer () {
return(
    <div className="footercontainer">
        <div className="footerlogo">
        <img src={logo} alt="Travel World" width="280" height="120"/>
        </div>
        <div className="footerdest">
            Destinations
            <div className="destitem">Denmark</div>
            <div className="destitem">Sweden</div>
            <div className="destitem">Iceland</div>
            <div className="destitem">Norway</div>
            <div className="destitem">Finland</div>
        </div>
        <div className="footercomp">
        Company
            <div className="destitem">Contact Us</div>
            <div className="destitem">Privacy Policy</div>
            <div className="destitem">Terms & Conditions</div>
        </div>
        <div className="footersocial">
            Social Media
            <div className="socialitem1">
                <div><FaFacebook/></div>
                <div><FaTwitter/></div>
            </div>
            <div className="socialitem2">
            <div><FaTwitter/></div>
                <div><FaYoutube/></div>
            </div>
        </div>
    </div>
)

}

export default Footer;