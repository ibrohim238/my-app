import {useParams} from "react-router-dom";
import ProductRepository from "../../service/Repositories/ProductRepository";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import Product from "../../service/model/Product";


export default function ProductShow() {
    const {id} = useParams();
    const [product, setProduct] = useState(new Product());
    useEffect(() => {
        ProductRepository.getShow(id).then(setProduct);
    }, []);


    return (
        <div>
            <div>
                <Link to="/products">
                    Вернуться
                </Link>
            </div>
            <div>

                <div>
                    {product.id}
                </div>
                <div>
                    {product.title}
                </div>
                <div>
                    {product.category}
                </div>
                <div>
                    {product.description}
                </div>
                <img height="200" width="200" src={product.image} alt={product.title}/>
            </div>
        </div>
    )
}