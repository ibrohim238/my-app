import ProductRepository from "../../service/Repositories/ProductRepository";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function ProductIndex() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({
        sort: 'asc',
    });

    let changeSelectSort = (e) => {
        setSearchParams({
            sort: e.target.value
        });
    };

    useEffect(() => {
        ProductRepository.getIndex(searchParams).then(setProducts);
    }, [searchParams]);


    return (
        <div>
            <select value={searchParams.get('sort')} onChange={changeSelectSort}>
                <option defaultChecked value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>
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