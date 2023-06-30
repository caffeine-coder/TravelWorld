import React from "react";
import './divider.css'
import logo1 from '../images/logo1.png';
import logo3 from '../images/logo3.png';
function Divider() {

    return (<div className="firstdivider">
<div className="middledivider">
<div className="divimg">
    <img className="divimgitem" src={logo1} height={'130px'} width={'200px'}></img>
    <img className="divimgitem" src={logo1} height={'130px'} width={'200px'}></img>
    <img className="divimglastitem" src={logo3} ></img>
</div>
</div>
<div className="lastdivider"></div>

    </div>)
}

export default Divider;
