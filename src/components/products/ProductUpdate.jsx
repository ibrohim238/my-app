import { useEffect, useState } from "react";
import Product from "../../service/model/Product";
import ProductRepository from "../../service/Repositories/ProductRepository";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "./../forms/ProductForm";

export default function ProductUpdate() {
    const { id } = useParams();
    const [product, setProduct] = useState(new Product());
    const navigate = useNavigate();

    useEffect(() => {
        ProductRepository.getShow(id).then(setProduct);
    }, [id]);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedProduct = await ProductRepository.update(id, product);
            navigate('/products/' + updatedProduct.id);
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div>
            <ProductForm
                product={product}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}