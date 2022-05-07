import axios from 'axios';
const PRODUCT_API_BASE_URL = "http://127.0.0.1:8083/product/list";
class ProductService{
    getProductsAll(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
}

export default new ProductService();