import { Link } from "react-router-dom";

const NewsCard = ({ allnews }) => {
  const { title, urlToImage, description , url} = allnews;
  return (

    <div >
        
        <div className="card card-compact w-full p-2 lg:w-96 md:h-[400px] lg:h-[400px] bg-white shadow-xl my-2">
  <figure><img className="w-full h-[140px]" src={urlToImage} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title text-gray-800">{ title }</h2>
    <p className="text-gray-800 lg:text-2xl"> {description} </p>
    <div className="card-actions justify-end">

    <Link to={`/news/${encodeURIComponent(title)}`}>
              <button className="bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-500 px-4 py-2 rounded-lg text-white text-xl font-semibold">Read More</button>
            </Link>

    </div>
  </div>
</div>
    
    </div>
  );
};

export default NewsCard;
