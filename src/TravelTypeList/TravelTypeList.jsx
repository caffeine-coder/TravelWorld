import React from "react";
import './traveltypelist.css';
import TravelType from "../TravelType/TravelType";
import sweden from '../images/solo.png'





function TravelTypeList() {
    return (<div className="traveltypelist">
        <TravelType src={sweden} traveltype='Solo'/>
        <TravelType src={sweden} traveltype='Luxury'/>
        <TravelType src={sweden} traveltype='Safari'/>
        <TravelType src={sweden} traveltype='Adventure'/>
        <TravelType src={sweden} traveltype='Business'/>
        <TravelType src={sweden} traveltype='Wellness'/>

    </div>)
}

export default TravelTypeList;