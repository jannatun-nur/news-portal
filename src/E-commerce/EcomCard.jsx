import { Link } from "react-router-dom";


const EcomCard = ({businesses}) => {

    const {image, title} = businesses;

    return (
        <div>
      <div className="card card-compact w-full p-2 lg:w-96 bg-white shadow-xl my-2 px-3 lg:mx-5 mx-0">
        <figure>
          <img className="w-full h-[200px]" src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-gray-800">{title}</h2>
        
          <div className="card-actions justify-end">
            <Link to={`/ecommerce/${encodeURIComponent(title)}`}>
              <button className="bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-500 px-4 py-2 rounded-lg text-white lg:text-xl ">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default EcomCard;