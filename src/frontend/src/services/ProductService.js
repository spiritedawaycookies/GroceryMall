import axios from 'axios';
const PRODUCT_API_BASE_URL = "http://127.0.0.1:8083/product/list";
class ProductService {
    getProductsDefault() {
        return axios.get(PRODUCT_API_BASE_URL+'?pageNum=1&pageSize=1000');
    }
    getProductsAtPage(pageNum,pageSize) {
        return axios.get(PRODUCT_API_BASE_URL+'?pageNum='+pageNum+'&pageSize='+pageSize);
    }
}

export default new ProductService();