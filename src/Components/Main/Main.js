import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Meal from '../Meal/Meal';
import './Main.css'
const Main = () => {
    const [meals, setMeals] = useState([]);
    const url ='https://www.themealdb.com/api/json/v1/1/search.php?f=a';
    useEffect( ()=>{
        fetch(url)
        .then( res => res.json())
        .then( data =>setMeals(data.meals))
    },[]);
    const showDetailsBtn =(id)=>{
        console.log(id)
        return id;
    }
    const detailId= showDetailsBtn;
    return (
        <div className='main'>
            <div className="menu-container">
                {
                    meals.map( meal => <Meal key={meal.idMeal} showDetailsBtn={showDetailsBtn} meal={meal}></Meal>)
                }
            </div>
            <div className="order-lists-container">
                <Details showDetailsId={detailId}></Details>
            </div>
        </div>
    );
};

export default Main;