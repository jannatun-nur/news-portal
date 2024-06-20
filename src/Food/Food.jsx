import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";


const Food = () => {

    const [food , setFood] = useState([]);

    useEffect( ()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then( res => res.json())
        .then(data => setFood(data.categories))
    },[])
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
                {
                    food?.map( foods =><FoodCard key={foods} foods={foods}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Food;