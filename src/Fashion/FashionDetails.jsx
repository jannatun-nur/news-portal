import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const FashionDetails = () => {

    const {title} = useParams();
    const [fashionDeatil , setFashionDetail] = useState(null)

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3aef59215c354142be701ad459c802ad')
          .then(res => res.json())
          .then(data => {
            const article = data.articles.find(article => article.title === decodeURIComponent(title));
            setFashionDetail(article);
          });
      }, [title]);

      if (!fashionDeatil) return <div>Loading...</div>;

    return (
        <div className="p-4 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 py-3">{fashionDeatil.title}</h1>
        <img src={fashionDeatil.urlToImage} alt="news" className="w-full mb-4" />
        <p className="text-3xl font-bold mb-4 text-gray-800">{fashionDeatil.author}</p>
        <p className="text-xl text-gray-800 font-semibold">{fashionDeatil.description}</p>
        <p className="text-xl text-gray-800 py-4">{fashionDeatil.content}</p>
        <a href={fashionDeatil.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-xl lg:text-2xl font-semibold">
          Read full article
        </a>
      </div>
    );
};

export default FashionDetails;