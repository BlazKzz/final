import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../data/asyncMock";
import ItemList from "../Itemlist/Itemlist";
import Loading from "../Loading/Loading";
import './Category.css';

export default function ProductsCategory(){
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
        setLoading(true);
        getProductByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]);
    console.log("Categoría ID:", categoryId);
    console.log("Productos filtrados:", products);
    return(
        <div className="container-category">
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <ItemList products={products}/>
            )}
        </div>
    )
};