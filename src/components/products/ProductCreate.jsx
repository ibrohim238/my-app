import {useState} from "react";
import Product from "../../service/model/Product";
import ProductRepository from "../../service/Repositories/ProductRepository";
import { useNavigate } from "react-router-dom";


export default function ProductCreate() {
    const [formData, setFormData] = useState(new Product());

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Access form data here
        ProductRepository.store(formData).then(product => navigate('/products/' + product.id))
        // You can perform further actions like sending data to backend etc.
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="file"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}