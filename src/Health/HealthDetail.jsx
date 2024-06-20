import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HealthDetail = () => {
  const { title } = useParams();
  const [healthDetail, setHealthDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6673a66f75872d0e0a931857.mockapi.io/health")
      .then((res) => res.json())
      .then((data) => {
        const singleData = data.find(
          (item) => item.title === decodeURIComponent(title)
        );
        setHealthDetail(singleData || {});
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [title]);

  if (loading) {
    return (
      <div className="text-xl lg:text-2xl text-blue-600 animate-bounce text-center mt-10">
        Loading...<span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl lg:text-3xl font-bold mb-4 text-gray-800 py-3">
        {healthDetail.title}
      </h1>
      <img src={healthDetail.image} alt="news" className="w-full lg:h-[500px] mb-4" />
      <p className="text-3xl font-bold mb-4 text-gray-800">
        {healthDetail.name}
      </p>
      <p className="text-xl text-gray-800 font-semibold">
        {healthDetail.description}
      </p>
    </div>
  );
};

export default HealthDetail;
