import React, { useEffect, useState } from 'react';
import DetailsCard from '../DetailsCard/DetailsCard';
import './Details.css';

const Details = ({showDetailsId}) => {
    const [detailDish, setDetailDish] = useState([]);
    const myid = showDetailsId;
    console.log(myid);
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${showDetailsId}`;

    useEffect( ()=>{
        fetch(url)
        .then( res => res.json())
        .then( data =>setDetailDish(data.meals))
    },[]);
    return (
        <div className='card'>
            <DetailsCard meal={detailDish}></DetailsCard>
        </div>
    );
};

export default Details;