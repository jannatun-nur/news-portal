import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const NewsPortal = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://6673a66f75872d0e0a931857.mockapi.io/heathcare')
       .then(res => res.json())
       .then(data => setNews(data));
    }, []);

const newsData = news.slice(0,10)

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-6 lg:gap-10 my-2">
                {
                   newsData?.map((allnews, index) => <NewsCard key={index} allnews={allnews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default NewsPortal;