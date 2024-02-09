import ProductRepository from "../../service/Repositories/ProductRepository";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function ProductIndex() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({
        sort: 'asc',
    });

    useEffect(() => {
        ProductRepository.getIndex(searchParams).then(setProducts);
    }, []);


    return (
        <div>
            <div>
                {
                    products.map((product) => {
                        return (
                            <a href={'/products/' + product.id}>
                                <div>{product.title}</div>
                                <img height="200" width="200" src={product.image} alt={product.title}/>
                                <div>{product.price}</div>
                                <div>{product.category}</div>
                            </a>
                        )
                    })
                }
            </div>

        </div>
    )
}