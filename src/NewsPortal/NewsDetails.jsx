import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const NewsDetails = () => {
  const { title } = useParams();
  const [newsDetail, setNewsDetail] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3aef59215c354142be701ad459c802ad')
      .then(res => res.json())
      .then(data => {
        const article = data.articles.find(article => article.title === decodeURIComponent(title));
        setNewsDetail(article);
      });
  }, [title]);

  if (!newsDetail) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{newsDetail.title}</h1>
      <img src={newsDetail.urlToImage} alt="news" className="w-full mb-4" />
      <p className="text-xl">{newsDetail.description}</p>
      <p>{newsDetail.content}</p>
      <a href={newsDetail.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        Read full article
      </a>
    </div>
  );
};

export default NewsDetails;