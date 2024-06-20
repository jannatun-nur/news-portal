import Marquee from "react-fast-marquee";

import daily from '../../public/update.png' 
import ecomm from '../../public/ecmm.png'
import food from '../../public/food.png'
import health from '../../public/health.png'
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="my-5">
       <p className="py-14 lg:text-4xl text-2xl text-blue-700 text-center font-bold">Categories For You</p>

      <Marquee>
        {/* e-commerce */}
        <div className="card w-96 bg-base-100 image-full ml-10">
          <figure>
            <img
              src={ecomm}
              alt="image"
              className=" w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl text-white font-semibold">E-commerce</h2>
             <p className="text-white">Ecommerce is the electronic buying and selling of goods and services, usually via the internet. Businesses can build their own ecommerce website, set up an ......</p>
            <div className="card-actions justify-end">
              <Link to='/ecommerce'>
              <button className="px-4 py-1 rounded-lg text-blue-700 bg-white text-xl font-bold">Learn more</button>
              </Link>
            </div>
          </div>
        </div>





        {/* food */}
        <div className="card w-96 bg-base-100 image-full ml-10">
          <figure>
            <img
              src={food}
              alt="food"
              className=" w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl text-white font-semibold">Food</h2>
             <p className="text-white">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins.</p>
            <div className="card-actions justify-end">
            <Link to='/food'>
              <button className="px-4 py-1 rounded-lg text-blue-700 bg-white text-xl font-bold">Learn more</button> 
              </Link>
            </div>
          </div>
        </div>


        {/*daily update*/}
        <div className="card w-96 bg-base-100 image-full ml-10">
          <figure>
            <img
              src={daily}
              alt="image"
              className=" w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl text-white font-semibolde">Daily Update</h2>
             <p className="text-white"> A status update is a management document outlining a project's progress. The status update summarizes the project's current status since the last update......</p>
            <div className="card-actions justify-end">
            <Link to='/update'>
              <button className="px-4 py-1 rounded-lg text-blue-700 bg-white text-xl font-bold">Learn more</button> 
              </Link>
            </div>
          </div>
        </div>


        
        {/*Health Care*/}
        <div className="card w-96 bg-base-100  image-full ml-10">
          <figure>
            <img
              src={health}
              alt="img"
              className=" w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl text-white font-semibold">Health</h2>
             <p className="text-white">Health is a multifaceted concept that encompasses physical, mental, and social well-being. It is not merely the absence of disease or infirmity but a state of complete harmony within the body and mind. </p>
            <div className="card-actions justify-end">
              <Link to='/health'>
              <button className="px-4 py-1 rounded-lg text-blue-700 bg-white text-xl font-bold">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Slider;
