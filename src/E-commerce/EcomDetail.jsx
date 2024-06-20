import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EcomDetail = () => {
    const { title } = useParams();
    const [businessDetail, setBusinessDetail] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                const product = data.find(product => product.title === decodeURIComponent(title));
                setBusinessDetail(product);
            });
    }, [title]);

    if (!businessDetail) {
        return (
            <div className="text-xl lg:text-2xl text-blue-600 animate-bounce text-center mt-10">
                Loading...<span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="p-4 bg-white">
            <h1 className="text-xl lg:text-3xl font-bold mb-4 text-gray-800 py-3">
                {businessDetail.title}
            </h1>
            <img src={businessDetail.image} alt="product" className="w-full lg:h-[500px] mb-4" />
            <p className="text-xl text-gray-800 font-semibold">
                {businessDetail.description}
            </p>
        </div>
    );
};

export default EcomDetail;
