import React from "react";
import './cardlist.css';
import Card from '../Card/Card';
import denmark from '../images/denmark.jpg'
import finland from '../images/finland.jpg'
import iceland from '../images/iceland.jpg'
import norway from '../images/norway.jpg'
import sweden from '../images/sweden.jpeg'




function CardList() {
    return (<div className="cardlist">
        <Card src={denmark} title="Denmark"  />
        <Card src={norway} title="Norway"/>
        <Card src={sweden} title="Sweden"/>
        <Card src={finland} title="Finland"/>
        <Card src={iceland} title="Iceland"/>
    </div>)
}

export default CardList;