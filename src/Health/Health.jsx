import { useEffect, useState } from "react";
import HealthCard from "./HealthCard";


const Health = () => {

    const [health , setHealth]  = useState([]);

    useEffect( ()=>{
        fetch('https://6673a66f75872d0e0a931857.mockapi.io/health')
        .then(res => res.json())
        .then(data => setHealth(data))
    },[])

    const sliceHealth = health.slice(0,8)


    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-6 lg:gap-10 my-2">
                {
                     sliceHealth.map( healths =><HealthCard key={healths} healths={healths}></HealthCard>)
                }
            </div>
        </div>
    );
};

export default Health;