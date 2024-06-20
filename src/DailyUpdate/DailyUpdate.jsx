import { useEffect } from "react";
import { useState } from "react";
import DailyUpdateCard from "./DailyUpdateCard";


const DailyUpdate = () => {

    const [daily , setDaily] = useState([])

    useEffect(()=>{
        fetch('https://6673a66f75872d0e0a931857.mockapi.io/heathcare')
        .then(res => res.json())
        .then(data => setDaily(data))
    },[])

    const dailyData = daily.slice(11,18)
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-6 lg:gap-10 my-2">
                {
                    dailyData?.map((dailys , index) =><DailyUpdateCard key={index} dailys={dailys}></DailyUpdateCard>)
                }
            </div>
        </div>
    );
};

export default DailyUpdate;