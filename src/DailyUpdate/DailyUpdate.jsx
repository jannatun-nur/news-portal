import { useEffect } from "react";
import { useState } from "react";
import DailyUpdateCard from "./DailyUpdateCard";


const DailyUpdate = () => {

    const [daily , setDaily] = useState([])

    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=3aef59215c354142be701ad459c802ad')
        .then(res => res.json())
        .then(data =>{
            const sliceArticle = data.articles.slice(0 , 12)
            setDaily(sliceArticle)
        })
    },[])
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-6 lg:gap-10 my-2">
                {
                    daily.map((dailys , index) =><DailyUpdateCard key={index} dailys={dailys}></DailyUpdateCard>)
                }
            </div>
        </div>
    );
};

export default DailyUpdate;