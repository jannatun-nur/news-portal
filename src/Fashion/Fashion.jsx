import { useEffect } from "react";
import { useState } from "react";
import FashionCard from "./FashionCard";


const Fashion = () => {

    const [fashion , setFashion] = useState([])

    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3aef59215c354142be701ad459c802ad')
        .then(res => res.json())
        .then(data =>setFashion(data.articles))
    },[])
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-6 lg:gap-10 my-2">
                {
                    fashion.map((fashions , index) =><FashionCard key={index} fashions={fashions}></FashionCard>)
                }
            </div>
        </div>
    );
};

export default Fashion;