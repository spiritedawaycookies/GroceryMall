import axios from 'axios';
const PRODUCT_API_BASE_URL = "http://localhost:8083/product/list";
class ProductService{
    getProductsAll(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
}

export default new ProductService();