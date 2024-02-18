import {useState} from "react";
import Product from "../../service/model/Product";
import ProductRepository from "../../service/Repositories/ProductRepository";
import { useNavigate } from "react-router-dom";
import ProductForm from "../forms/ProductForm";


export default function ProductCreate() {
    const [product, setProduct] = useState(new Product());

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setProduct(prevState => ({
            ...prevState,
            image: file
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        ProductRepository.store(product).then(product => navigate('/products/' + product.id))
    };

    return (
        <div>
            <div>
                <ProductForm
                    product={product}
                    handleChange={handleChange}
                    handleFileChange={handleFileChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}