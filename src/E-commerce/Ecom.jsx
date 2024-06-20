import { useEffect, useState } from "react";
import EcomCard from "./EcomCard";

const Ecom = () => {

    const [bussiness , setBussiness] = useState([]);

    useEffect( ()=>{
        fetch('https://fakestoreapi.com/products')
        .then( res => res.json())
        .then(data => {
            const electroProduct = data.filter(product => product.category === "electronics")
            setBussiness(electroProduct)
        
        })
    },[])


    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
                {
                    bussiness?.map( businesses =><EcomCard key={businesses} businesses={businesses}></EcomCard>)
                }
            </div>
        </div>
    );
};

export default Ecom;