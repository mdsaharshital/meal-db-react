import React from 'react';
import './DetailsCard.css';
const DetailsCard = ({meal}) => {
    const{strCategory,strInstructions,strMealThumb,strMeal} = meal;
    return (
        <div>
            <img src={strMealThumb}  alt="" />
            <div className="card-details">
            <h3>Dish: {strMeal}</h3>
            <h5>Category:{strCategory}</h5>
            <p> Instructions: <small>{strInstructions} </small></p>
            </div>
        </div>
    );
};

export default DetailsCard;