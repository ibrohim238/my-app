import client from "../Client";
import Product from "../model/Product";


export default {
    async getIndex(queryParams) {
        return await client.get('/products')
            .then(res => {
                return res.data.map(product => Product.fromData(product));
            })
            .catch(error => console.log(error));
    },
    async getShow(id) {
        return await client.get(`/products/${id}`)
            .then(res => {
                return Product.fromData(res.data);
            })
            .catch(error => console.log(error));
    }
}
