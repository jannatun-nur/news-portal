import Marquee from "react-fast-marquee";

import life from '../../public/life.png' 
import fashion from '../../public/fa.png'
import food from '../../public/food.png'
import sport from '../../public/sport.png'
const Slider = () => {
  return (
    <div className="my-5">
       <p className="py-14 lg:text-4xl text-2xl text-blue-700 text-center font-bold">Categories For You</p>

      <Marquee>
        {/* fashion */}
        <div className="card w-96 bg-base-100 image-full ml-10">
          <figure>
            <img
              src={fashion}
              alt="fashion"
              className=" w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl text-white font-semibold">Fashion</h2>
             <p className="text-white">Fashion is a term used interchangeably to describe the creation of clothing, footwear, accessories, cosmetics, and jewellery of different cultural aesthetics and their mix and match into outfits.</p>
            <div className="card-actions justify-end">
              <button className="px-4 py-1 rounded-lg text-blue-700 bg-white text-xl font-bold">Learn more</button>
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
              <button className="px-4 py-1 rounded-lg text-blue-700 bg-white text-xl font-bold">Learn more</button>
            </div>
          </div>
        </div>

        {/*life */}
        <div className="card w-96 bg-base-100 image-full ml-10">
          <figure>
            <img
              src={life}
              alt="lifestyle"
              className=" w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl text-white font-semibolde">Life Style</h2>
             <p className="text-white">Lifestyle is the interests, opinions, behaviours, and behavioural orientations of an individual, group, or culture. The term was introduced by Austrian psychologist Alfred Adler in his 1929 book........</p>
            <div className="card-actions justify-end">
              <button className="px-4 py-1 rounded-lg text-blue-700 bg-white text-xl font-bold">Learn more</button>
            </div>
          </div>
        </div>
        
        {/*sports*/}
        <div className="card w-96 bg-base-100  image-full ml-10">
          <figure>
            <img
              src={sport}
              alt="sports"
              className=" w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl text-white font-semibold">Sports</h2>
             <p className="text-white">Sport covers a range of activities performed within a set of rules and undertaken as part of leisure or competition. Sporting activities involve physical activity carried out by teams or individuals and...</p>
            <div className="card-actions justify-end">
              <button className="px-4 py-1 rounded-lg text-blue-700 bg-white text-xl font-bold">Learn more</button>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Slider;
