import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DailyUpdateDetail = () => {
  const { title } = useParams();
  const [newsDeatil, setNewsDetail] = useState(null);

  useEffect(() => {
    fetch(
      "https://6673a66f75872d0e0a931857.mockapi.io/heathcare"
    )
      .then((res) => res.json())
      .then((data) => {
        const article = data.find(
          (article) => article.title === decodeURIComponent(title)
        );
        setNewsDetail(article);
      });
  }, [title]);

  if (!newsDeatil)
    return (
      <div className="text-xl lg:text-2xl text-blue-600 animate-bounce text-center mt-10">
        Loading...<span className="loading loading-ring loading-lg"></span>
      </div>
    );

  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl lg:text-3xl font-bold mb-4 text-gray-800 py-3">
        {newsDeatil.title}
      </h1>
      <img
        src={newsDeatil.urlToImage}
        alt="news"
        className="w-full h-[400px] mb-4"
      />
      <p className="text-3xl font-bold mb-4 text-gray-800">
        {newsDeatil.author}
      </p>
      <p className="text-xl text-gray-800 font-semibold">
        {newsDeatil.description}
      </p>
      <p className="text-xl text-gray-800 py-4">{newsDeatil.content}</p>
      <a
        href={newsDeatil.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline text-xl lg:text-2xl font-semibold"
      >
        Read full article
      </a>
    </div>
  );
};

export default DailyUpdateDetail;
