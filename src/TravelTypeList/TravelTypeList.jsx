import React from "react";
import './traveltypelist.css';
import TravelType from "../TravelType/TravelType";
import solo from '../images/solo.png'
import luxury from '../images/luxury.png'
import adventure from '../images/adventure.png'
import business from '../images/business.png'
import wellness from '../images/wellness.png'
import safari from '../images/safari.png'





function TravelTypeList() {
    return (<div className="traveltypelist">
        <TravelType src={solo} traveltype='Solo'/>
        <TravelType src={luxury} traveltype='Luxury'/>
        <TravelType src={safari} traveltype='Safari'/>
        <TravelType src={adventure} traveltype='Adventure'/>
        <TravelType src={business} traveltype='Business'/>
        <TravelType src={wellness} traveltype='Wellness'/>

    </div>)
}

export default TravelTypeList;