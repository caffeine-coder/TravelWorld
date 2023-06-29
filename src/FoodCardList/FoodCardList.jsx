import React from "react";
import './foodcardlist.css';
import FoodCard from "../Food/FoodCard";




function FoodCardList() {
    return (<div className="foodcardlist">
    <FoodCard title="Vegetarian"/>
    <FoodCard title="Non Vegetarian"/>
    <FoodCard title="Vegan"/>
    </div>)
}

export default FoodCardList;