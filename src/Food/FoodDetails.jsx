import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { idCategory } = useParams();
  const [foodDetail, setFoodDetail] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        const category = data.categories.find(
          (category) => category.idCategory === decodeURIComponent(idCategory)
        );
        setFoodDetail(category);
      });
  }, [idCategory]);

  if (!foodDetail) {
    return (
      <div className="text-xl lg:text-2xl text-blue-600 animate-bounce text-center mt-10">
        Loading...<span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white">
      <img
        src={foodDetail?.strCategoryThumb}
        alt="food"
        className="w-[600px] lg:h-[300px] lg:ml-64 mb-4"
      />
      <p className="text-3xl font-bold mb-4 text-gray-800">
        {foodDetail.strCategory}
      </p>
      <p className="text-xl text-gray-800 font-semibold">
        {foodDetail.strCategoryDescription}
      </p>
    </div>
  );
};

export default FoodDetails;
