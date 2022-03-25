import React from 'react';
import './Meal.css';
const Meal = ({meal,showDetailsBtn}) => {
    const{idMeal,strCategory,strInstructions,strMealThumb,strMeal} = meal;
    return (
        <div className='card'>
            <img src={strMealThumb}  alt="" />
            <div className="card-details">
            <h3>Dish: {strMeal}</h3>
            <h5>Category:{strCategory}</h5>
            <p> Instructions: <small>{strInstructions.slice(0,120)} </small></p>
            <button onClick={()=> showDetailsBtn(idMeal)} className='details-btn'>Details</button>
            </div>
        </div>
    );
};

export default Meal;