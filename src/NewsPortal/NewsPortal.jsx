import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const NewsPortal = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3aef59215c354142be701ad459c802ad')
       .then(res => res.json())
       .then(data => setNews(data.articles));
    }, []);



    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-6 lg:gap-10 my-2">
                {
                   news.map((allnews, index) => <NewsCard key={index} allnews={allnews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default NewsPortal;